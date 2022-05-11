import { ChangeEvent, useCallback, useState } from 'react'

import { useAppDispatch } from 'state/hooks'
import { useMintWallet } from 'state/mint/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { isAddress } from 'utils'

export const useColdWalletInput = () => {
  const { option, wallet } = useMintWallet()
  const [coldWallet, setColdWallet] = useState<string>(() => (option === 'cold' ? wallet : ''))
  const [isValid, setIsValid] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (isAddress(e.target.value)) {
        dispatch(setMintWallet({ wallet: e.target.value }))
        setColdWallet(e.target.value)
        setIsValid(true)
      } else setIsValid(false)
    },
    [dispatch]
  )

  return { isValid, coldWallet, handleChange }
}
