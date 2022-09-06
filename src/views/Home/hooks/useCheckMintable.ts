import { useCallback, useEffect, useState } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { notifyToast, NOTIFY_MESSAGES } from 'config/toast'
import { useActiveWeb3React, useGetFoundersPassContract } from 'hooks'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { useMintPhase } from 'state/mint/hooks'
import { useSupplyAmounts } from 'state/web3/hooks'
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

export const useGetSupplyAmounts = () => {
  const { chainId } = useActiveWeb3React()

  const dispatch = useAppDispatch()

  const handleGetSupplyAmounts = useCallback(async () => {
    try {
      const foundersPassContract = getContractWithSimpleProvider(
        getFoundersPassAddress(chainId ?? DEFAULT_CHAIN_ID),
        CONTRACT_ABIS.FOUNDERS_PASS,
        chainId ?? DEFAULT_CHAIN_ID
      )
      if (!foundersPassContract) return
      const totalSupply = await getTotalSupply(foundersPassContract)
      const tokenSupply = await getTokenSupply(foundersPassContract)
      const limitedEditionTokens = await getLimitedEditionTokens(foundersPassContract)

      console.log(totalSupply, tokenSupply, limitedEditionTokens)

      dispatch(setSupplyAmounts({ totalSupply, tokenSupply, limitedEditionTokens }))
    } catch (e) {
      console.log(e)
    }
  }, [chainId, dispatch])

  useEffect(() => {
    handleGetSupplyAmounts()
  }, [handleGetSupplyAmounts])
}

export const useCheckMintable = () => {
  const { chainId } = useActiveWeb3React()
  const mintPhase = useMintPhase()
  // const { totalSupply, tokenSupply, limitedEditionTokens } = useSupplyAmounts()
  const foundersPassContract = getContractWithSimpleProvider(
    getFoundersPassAddress(chainId ?? DEFAULT_CHAIN_ID),
    CONTRACT_ABIS.FOUNDERS_PASS,
    chainId ?? DEFAULT_CHAIN_ID
  )

  const dispatch = useAppDispatch()

  const [isMintable, setIsMintable] = useState<boolean>(false)

  const handleIsMintable = useCallback(
    async (mintWallet?: string, mintCount?: number) => {
      if (!foundersPassContract) return false

      const totalSupply = await getTotalSupply(foundersPassContract)
      const tokenSupply = await getTokenSupply(foundersPassContract)
      const limitedEditionTokens = await getLimitedEditionTokens(foundersPassContract)

      dispatch(setSupplyAmounts({ totalSupply, tokenSupply, limitedEditionTokens }))

      console.log('isMintable check===>>>', totalSupply, tokenSupply, limitedEditionTokens, mintPhase)
      console.log(mintCount, mintWallet)

      if (totalSupply === (mintPhase === 1 ? limitedEditionTokens : tokenSupply)) {
        notifyToast({ id: 'full-minted', type: 'warning', content: NOTIFY_MESSAGES.FULL_MINTED })
        setIsMintable(false)

        return false
      }

      if (mintWallet) {
        if (!foundersPassContract) {
          setIsMintable(false)
          return false
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
        }
      }

      setIsMintable(true)

      return true
    },
    [dispatch, foundersPassContract, mintPhase]
  )

  return { isMintable, handleIsMintable }
}
