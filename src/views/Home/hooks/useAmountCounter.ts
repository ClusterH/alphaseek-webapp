import { useCallback, useMemo } from 'react'

import { ethers } from 'ethers'

import { useAppDispatch } from 'state/hooks'
import { useMintCount, useMintPrice } from 'state/mint/hooks'
import { setMintCount } from 'state/mint/reducer'
import { useWalletBalance } from 'state/web3/hooks'

import { useIsAllowedToMint } from './useMint'

export const useAmountCounter = () => {
  const mintCount = useMintCount()
  const price = useMintPrice()
  const { walletCount, walletLimit } = useIsAllowedToMint()

  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])

  const { ethBalance } = useWalletBalance()

  const dispatch = useAppDispatch()

  const handleCount = useCallback(
    (isPlus: boolean) => {
      if (isPlus) {
        if (Number(mintPrice) * (mintCount + 1) > Number(ethBalance)) return
        if (mintCount + 1 > walletLimit - walletCount) return
        dispatch(setMintCount(mintCount + 1))
      } else {
        if (mintCount < 1) return
        dispatch(setMintCount(mintCount - 1))
      }
    },
    [mintPrice, mintCount, ethBalance, walletLimit, walletCount, dispatch]
  )

  return { ethBalance, mintCount, mintPrice, handleCount }
}
