import { useCallback, useMemo, useState } from 'react'

import { ethers } from 'ethers'

import { ALLOW_LIST_API, CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { notifyToast, NOTIFY_MESSAGES } from 'config/toast'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useMintPhase, useMintPrice } from 'state/mint/hooks'
import { useWalletBalance } from 'state/web3/hooks'
import { setSupplyAmounts } from 'state/web3/reducer'
import {
  getLimitedEditionTokens,
  getTokenSupply,
  getTotalSupply,
  getWalletLimit,
  getFoundersPassAddress,
  getContractWithSimpleProvider,
  getWalletCount,
} from 'utils'

export const useCheckMintable = () => {
  const { chainId } = useActiveWeb3React()
  const mintPhase = useMintPhase()
  const price = useMintPrice()
  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])
  const { ethBalance } = useWalletBalance()
  const dispatch = useAppDispatch()

  const foundersPassContract = getContractWithSimpleProvider(
    getFoundersPassAddress(chainId ?? DEFAULT_CHAIN_ID),
    CONTRACT_ABIS.FOUNDERS_PASS,
    chainId ?? DEFAULT_CHAIN_ID
  )

  const [isMintable, setIsMintable] = useState<boolean>(false)

  const handleIsMintable = useCallback(
    async (mintWallet?: string, isCold?: boolean, mintCount?: number) => {
      try {
        if (!foundersPassContract) {
          setIsMintable(false)
          return false
        }

        const totalSupply = await getTotalSupply(foundersPassContract)
        const tokenSupply = await getTokenSupply(foundersPassContract)
        const limitedEditionTokens = await getLimitedEditionTokens(foundersPassContract)

        dispatch(setSupplyAmounts({ totalSupply, tokenSupply, limitedEditionTokens }))

        if (totalSupply === (mintPhase === 1 ? limitedEditionTokens : tokenSupply)) {
          notifyToast({ id: 'full-minted', type: 'warning', content: NOTIFY_MESSAGES.FULL_MINTED })
          setIsMintable(false)

          return false
        }

        if (mintWallet) {
          if (mintPhase !== 0 && mintPhase !== 3) {
            const res = await fetch(ALLOW_LIST_API[chainId ?? DEFAULT_CHAIN_ID][mintPhase])
            const { proofs } = await res.json()
            const item = proofs.filter((item: { address: string; proof: string[] }) => item.address === mintWallet)

            if (item.length === 0) {
              notifyToast({
                id: 'validate-address',
                type: isCold === true ? 'error' : 'warning',
                content: NOTIFY_MESSAGES[isCold === true ? 'NOT_LISTED_COLD' : 'NOT_LISTED'],
              })
              setIsMintable(false)

              return false
            }
          }

          const limit = await getWalletLimit(foundersPassContract, mintWallet)
          const count = await getWalletCount(foundersPassContract, mintWallet)

          if (limit - count <= 0) {
            notifyToast({
              id: 'mint-limited',
              type: isCold ? 'error' : 'warning',
              content: isCold
                ? `Cold Wallet is limited! Allowed to mint ${limit}. Current wallet count is ${count}.`
                : NOTIFY_MESSAGES[mintPhase === 3 ? 'LIMITED_WALLET_PUBLIC' : 'LIMITED_WALLET'],
            })
            setIsMintable(false)

            return false
          }

          if (mintPhase !== 3)
            notifyToast({ id: 'listed-wallet', type: 'success', content: NOTIFY_MESSAGES[isCold ? 'WALLET_LISTED_COLD' : 'WALLET_LISTED'] })

          if (mintCount) {
            if (mintCount > (mintPhase === 1 ? limitedEditionTokens : tokenSupply) - totalSupply) {
              notifyToast({ id: 'mint-exceed-supply', type: 'error', content: NOTIFY_MESSAGES.MINT_EXCEED_SUPPLY })
              setIsMintable(false)

              return false
            } else if (mintCount > limit - count) {
              notifyToast({ id: 'mint-exceed-limit', type: 'error', content: NOTIFY_MESSAGES.MINT_EXCEED_LIMIT })
              setIsMintable(false)

              return false
            }

            if (Number(mintPrice) * mintCount > Number(ethBalance)) {
              notifyToast({ id: 'insufficient-balance', type: 'error', content: NOTIFY_MESSAGES.BALANCE_NOT_ENOUGH })
              setIsMintable(false)

              return false
            }
          }
        }

        setIsMintable(true)

        return true
      } catch (error) {
        console.log(error)
        setIsMintable(false)

        return false
      }
    },
    [chainId, dispatch, ethBalance, foundersPassContract, mintPhase, mintPrice]
  )

  return { isMintable, handleIsMintable }
}
