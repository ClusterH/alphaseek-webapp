import { useCallback, useEffect } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPrice } from 'state/mint/reducer'
import { getContractWithSimpleProvider, getFoundersPassAddress, getMintPrice } from 'utils'

export const useGetMintPrice = () => {
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const handleGetMintPrice = useCallback(async () => {
    const foundersPassContract = getContractWithSimpleProvider(
      getFoundersPassAddress(chainId ?? DEFAULT_CHAIN_ID),
      CONTRACT_ABIS.FOUNDERS_PASS,
      chainId ?? DEFAULT_CHAIN_ID
    )
    if (!foundersPassContract) return
    try {
      const price = await getMintPrice(foundersPassContract)
      dispatch(setMintPrice(price))
    } catch (error) {
      console.log(error)
    }
  }, [chainId, dispatch])

  useEffect(() => {
    handleGetMintPrice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
