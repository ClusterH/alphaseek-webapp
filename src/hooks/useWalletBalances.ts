import { useCallback, useEffect } from 'react'

import { AppState } from 'state'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { setWalletBalance } from 'state/web3/reducer'
import { getEthBalanace } from 'utils/web3CallHelpers'
import { getSimpleRPCProvider } from 'utils/web3Helpers'

import { useActiveWeb3React } from './useActiveWeb3React'

export const useWalletBalances = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.walletBalance)
}

export const useGetWalletBalance = () => {
  const { account, chainId } = useActiveWeb3React()

  const dispatch = useAppDispatch()

  const handleFetchBalances = useCallback(async () => {
    try {
      const provider = getSimpleRPCProvider(chainId)

      if (!account || !provider) return

      const ethBalance = await getEthBalanace(provider, account)

      dispatch(setWalletBalance({ ethBalance }))
    } catch (e) {
      console.log(e)
    }
  }, [chainId, account, dispatch])

  useEffect(() => {
    handleFetchBalances()
  }, [handleFetchBalances, account])
}
