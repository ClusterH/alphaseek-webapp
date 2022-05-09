import { MINTER_CONTRACT_ADDRESSES } from 'config/constants'

export const getMinterAddress = (chainId: number) => {
  return MINTER_CONTRACT_ADDRESSES[chainId]
}
