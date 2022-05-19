import { MINTER_CONTRACT_ADDRESSES, PASS_CONTRACT_ADDRESSES } from 'config/constants'

export const getMinterAddress = (chainId: number) => {
  return MINTER_CONTRACT_ADDRESSES[chainId]
}

export const getFounderPassAddress = (chainId: number) => {
  return PASS_CONTRACT_ADDRESSES[chainId]
}
