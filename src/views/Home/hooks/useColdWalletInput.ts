import { ChangeEvent, useCallback, useState } from 'react'

import { notifyToast, NOTIFY_MESSAGES } from 'config/toast'
import { useActiveWeb3React, useCheckMintable, useStateWithProps } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useMintWallet } from 'state/mint/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { isAddress } from 'utils'

export const useColdWalletInput = () => {
  const { account } = useActiveWeb3React()
  const { option, wallet } = useMintWallet()
  const { isMintable, handleIsMintable } = useCheckMintable()
  const [coldWallet, setColdWallet] = useStateWithProps<string>(option === 'cold' ? wallet : '')
  const [isValid, setIsValid] = useState<boolean>(true)
  const dispatch = useAppDispatch()

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setColdWallet(e.target.value)

      if (isAddress(e.target.value)) {
        const isMintable = await handleIsMintable(e.target.value)
        if (isMintable === false) return

        if (account === e.target.value) notifyToast({ id: 'same-address', type: 'warning', content: NOTIFY_MESSAGES.SAME_ADDRESS })
        dispatch(setMintWallet({ wallet: e.target.value, option: 'cold' }))
        setIsValid(true)
      } else setIsValid(false)
    },
    [account, dispatch, handleIsMintable, setColdWallet]
  )

  return { isValid, coldWallet, isMintable, handleChange }
}
