import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useWalletBalance = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.walletBalance)
}

export const useGasPrice = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.gasPrice)
}

export const useTotalSupply = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.totalSupply)
}
