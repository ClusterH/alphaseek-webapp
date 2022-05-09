import { useCallback, useEffect } from 'react'

import { useGetMinterContract } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPhase } from 'state/mint/reducer'
import { checkMintPhaseStatus } from 'utils'

export const useMintPanelStatus = () => {
  const minterContract = useGetMinterContract()
  const dispatch = useAppDispatch()

  const handleCheckMintPhaseStatus = useCallback(async () => {
    if (!minterContract) return
    try {
      const status = await checkMintPhaseStatus(minterContract)
      dispatch(setMintPhase(status))
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, minterContract])

  useEffect(() => {
    handleCheckMintPhaseStatus()
  }, [handleCheckMintPhaseStatus])
}
