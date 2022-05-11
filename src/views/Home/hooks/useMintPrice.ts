import { useCallback, useEffect } from 'react'

import { useGetMinterContract } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPrice } from 'state/mint/reducer'
import { getMintPrice } from 'utils'

export const useGetMintPrice = () => {
  const dispatch = useAppDispatch()
  const minterContract = useGetMinterContract()

  const handleGetMintPrice = useCallback(async () => {
    if (!minterContract) return
    try {
      const price = await getMintPrice(minterContract)
      dispatch(setMintPrice(price))
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, minterContract])

  useEffect(() => {
    handleGetMintPrice()
  }, [handleGetMintPrice])
}
