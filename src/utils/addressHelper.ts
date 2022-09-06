import { FOUNDERS_PASS_CONTRACT_ADDRESSES } from 'config/constants'

export const getFoundersPassAddress = (chainId: number) => {
  return FOUNDERS_PASS_CONTRACT_ADDRESSES[chainId]
}
