import { useCallback, useState } from 'react'

import { useWalletBalance } from 'state/web3/hooks'

export const useAmountCounter = () => {
  const [count, setCount] = useState<number>(0)
  const { ethBalance } = useWalletBalance()

  const NFT_PRICE = 3 // it is hard coded for now

  const handleCount = useCallback(
    (isPlus: boolean) => {
      if (isPlus) {
        if (NFT_PRICE * (count + 1) > Number(ethBalance)) return
        setCount(count + 1)
      } else {
        if (count === 0) return
        setCount(count - 1)
      }
    },
    [count, ethBalance]
  )

  return { ethBalance, count, NFT_PRICE, handleCount }
}
