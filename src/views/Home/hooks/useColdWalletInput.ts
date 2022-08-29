import { ChangeEvent, useCallback, useState } from 'react'

import { useStateWithProps } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useMintWallet } from 'state/mint/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { isAddress } from 'utils'

export const useColdWalletInput = () => {
  const { option, wallet } = useMintWallet()
  const [coldWallet, setColdWallet] = useStateWithProps<string>(option === 'cold' ? wallet : '')
  const [isValid, setIsValid] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setColdWallet(e.target.value)

      if (isAddress(e.target.value)) {
        dispatch(setMintWallet({ wallet: e.target.value, option: 'cold' }))
        setIsValid(true)
      } else setIsValid(false)
    },
    [dispatch, setColdWallet]
  )

  return { isValid, coldWallet, handleChange }
}
