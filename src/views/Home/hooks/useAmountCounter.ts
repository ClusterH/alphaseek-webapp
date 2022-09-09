import { useCallback, useEffect, useMemo } from 'react'

import { ethers } from 'ethers'

import { useAppDispatch } from 'state/hooks'
import { useMintCount, useMintPhase, useMintPrice } from 'state/mint/hooks'
import { setMintCount } from 'state/mint/reducer'
import { useSupplyAmounts, useWalletBalance } from 'state/web3/hooks'

import { useIsAllowedToMint } from './useMint'

export const useAmountCounter = () => {
  const mintCount = useMintCount()
  const price = useMintPrice()
  const mintPhase = useMintPhase()

  const { walletCount, walletLimit } = useIsAllowedToMint()
  const { totalSupply, tokenSupply, limitedEditionTokens } = useSupplyAmounts()

  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])

  const { ethBalance } = useWalletBalance()

  const dispatch = useAppDispatch()

  const handleCount = useCallback(
    async (isPlus: boolean) => {
      if (isPlus) {
        if (Number(mintPrice) * (mintCount + 1) > Number(ethBalance)) return
        if (
          mintCount + 1 > (mintPhase === 1 ? limitedEditionTokens : tokenSupply) - totalSupply ||
          mintCount + 1 > walletLimit - walletCount
        )
          return

        dispatch(setMintCount(mintCount + 1))
      } else {
        if (mintCount < 1) return
        dispatch(setMintCount(mintCount - 1))
      }
    },
    [mintPrice, mintCount, ethBalance, mintPhase, limitedEditionTokens, tokenSupply, totalSupply, walletLimit, walletCount, dispatch]
  )

  useEffect(() => {
    return () => {
      dispatch(setMintCount(1))
    }
  }, [dispatch])

  return { handleCount }
}
