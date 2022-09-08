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
    async (mintWallet?: string, mintCount?: number) => {
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
            const res = await fetch(ALLOW_LIST_API[mintPhase])
            const { proofs } = await res.json()
            const item = proofs.filter((item: { address: string; proof: string[] }) => item.address === mintWallet)

            if (item.length === 0) {
              notifyToast({ id: 'validate_address', type: 'error', content: NOTIFY_MESSAGES.VALIDATE_ADDRESS })
              setIsMintable(false)

              return false
            }
          }

          const limit = await getWalletLimit(foundersPassContract, mintWallet)
          const count = await getWalletCount(foundersPassContract, mintWallet)

          if (limit - count <= 0) {
            notifyToast({ id: 'mint-limited', type: 'error', content: NOTIFY_MESSAGES.MINTED_LIMITED })
            setIsMintable(false)

            return false
          }

          if (mintCount) {
            if (mintCount > (mintPhase === 1 ? limitedEditionTokens : tokenSupply) - totalSupply || mintCount > limit - count) {
              notifyToast({ id: 'mint-exceed', type: 'error', content: NOTIFY_MESSAGES.MINT_EXCEED })
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
    [dispatch, foundersPassContract, mintPhase]
  )

  return { isMintable, handleIsMintable }
}
