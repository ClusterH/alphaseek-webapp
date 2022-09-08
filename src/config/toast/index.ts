import { ReactNode } from 'react'

import { toast } from 'react-toastify'

export type TypeToastOptions = 'info' | 'success' | 'warning' | 'error'

export interface IToast {
  id: string
  type: TypeToastOptions
  content: string | ReactNode
}

export const notifyToast = (t: IToast, toastOption = {}) => {
  toast[t.type](t.content, { ...toastOption, toastId: t.id })
}

export const NOTIFY_MESSAGES: { [key: string]: string } = {
  FULL_MINTED: 'You cannot mint NFT anymore.',
  MINT_LIMITED: 'Your address limited to mint, please use another one.',
  MINT_EXCEED: 'You cannot mint more amount in your address.',
  SAME_ADDRESS: 'Your cold wallet is same with connected one.',
  VALIDATE_ADDRESS: 'Your address is not allowed to mint.',
  MINT_FAILED: 'Mint Failed!',
  SIGNATURE_FAILED: 'Failed to get Signature.',
  FAILED_TRANSACTION: 'Error Occured, please check console.',
  BALANCE_NOT_ENOUGH: 'Connected Wallet have not enough balance to Mint.',
}
