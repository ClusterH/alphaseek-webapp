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
  MINT_EXCEED_SUPPLY: 'Amount selected will exceed the Supply.',
  MINT_EXCEED_LIMIT: 'Amount selected will exceed the Limit.',
  LIMITED_WALLET: 'Connected wallet is listed, but has minted the limit. You must mint to a listed cold wallet.',
  LIMITED_WALLET_PUBLIC: 'Connected wallet has minted the limit. Please mint to a cold wallet.',
  SAME_ADDRESS: 'Your cold wallet is same with connected one.',
  WALLET_LISTED: 'Connected wallet is listed!',
  WALLET_LISTED_COLD: 'Cold wallet is listed!',
  NOT_LISTED: 'Connected wallet not listed. You must mint to a listed cold wallet.',
  NOT_LISTED_COLD: 'Cold Wallet not listed.',
  MINT_FAILED: 'Mint Failed!',
  SIGNATURE_FAILED: 'Failed to get Signature.',
  FAILED_TRANSACTION: 'Error Occured, please check console.',
  BALANCE_NOT_ENOUGH: 'Connected Wallet have not enough balance to Mint.',
}
