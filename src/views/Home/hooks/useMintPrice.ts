import { useCallback, useEffect } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPrice } from 'state/mint/reducer'
import { getContractWithSimpleProvider, getMinterAddress, getMintPrice } from 'utils'

export const useGetMintPrice = () => {
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const handleGetMintPrice = useCallback(async () => {
    const minterContract = getContractWithSimpleProvider(
      getMinterAddress(chainId ?? DEFAULT_CHAIN_ID),
      CONTRACT_ABIS.MINTER,
      chainId ?? DEFAULT_CHAIN_ID
    )
    if (!minterContract) return
    try {
      const price = await getMintPrice(minterContract)
      dispatch(setMintPrice(price))
    } catch (error) {
      console.log(error)
    }
  }, [chainId, dispatch])

  useEffect(() => {
    handleGetMintPrice()
  }, [handleGetMintPrice])
}
