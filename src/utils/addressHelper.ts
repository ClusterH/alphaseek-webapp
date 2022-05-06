import { COK_CONTRACT_ADDRESSES } from 'config/constants'

export const getCokAddress = (chainId: number) => {
  return COK_CONTRACT_ADDRESSES[chainId]
}
