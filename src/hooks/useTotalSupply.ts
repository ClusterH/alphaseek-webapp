import { useCallback, useEffect } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { AppState } from 'state'
import { useAppDispatch, useAppSelector } from 'state/hooks'
import { setTotalSupply } from 'state/web3/reducer'
import { getFounderPassAddress, getMinterAddress } from 'utils/addressHelper'
import { getTokenSupply, getTotalSupply } from 'utils/web3CallHelpers'
import { getContractWithSimpleProvider } from 'utils/web3Helpers'

export const useTotalSupply = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.totalSupply)
}

export const useGetTotalSupply = () => {
  const { chainId } = useActiveWeb3React()

  const dispatch = useAppDispatch()

  const handleFetchTotalSupply = useCallback(async () => {
    try {
      const founderPassContract = getContractWithSimpleProvider(
        getFounderPassAddress(chainId ?? DEFAULT_CHAIN_ID),
        CONTRACT_ABIS.PASS,
        chainId ?? DEFAULT_CHAIN_ID
      )
      const minterContract = getContractWithSimpleProvider(
        getMinterAddress(chainId ?? DEFAULT_CHAIN_ID),
        CONTRACT_ABIS.MINTER,
        chainId ?? DEFAULT_CHAIN_ID
      )
      if (!founderPassContract) return
      const totalSupply = await getTotalSupply(founderPassContract)
      const tokenSupply = await getTokenSupply(minterContract)

      dispatch(setTotalSupply({ totalSupply, tokenSupply }))
    } catch (e) {
      console.log(e)
    }
  }, [chainId, dispatch])

  useEffect(() => {
    handleFetchTotalSupply()
  }, [handleFetchTotalSupply])
}
