import { useCallback, useMemo, useState } from 'react'

import { ethers } from 'ethers'

import { useAppDispatch } from 'state/hooks'
import { useMintCount, useMintPrice } from 'state/mint/hooks'
import { setMintCount } from 'state/mint/reducer'
import { useWalletBalance } from 'state/web3/hooks'

export const useAmountCounter = () => {
  const mintCount = useMintCount()
  const price = useMintPrice()

  const mintPrice = useMemo(() => ethers.utils.formatEther(price), [price])

  const { ethBalance } = useWalletBalance()

  const dispatch = useAppDispatch()

  const handleCount = useCallback(
    (isPlus: boolean) => {
      if (isPlus) {
        if (Number(mintPrice) * (mintCount + 1) > Number(ethBalance)) return
        dispatch(setMintCount(mintCount + 1))
      } else {
        if (mintCount === 0) return
        dispatch(setMintCount(mintCount - 1))
      }
    },
    [mintPrice, mintCount, ethBalance, dispatch]
  )

  return { ethBalance, mintCount, mintPrice, handleCount }
}
