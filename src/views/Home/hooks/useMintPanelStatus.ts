import { useCallback, useEffect } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { usePanelStatus } from 'state/mint/hooks'
import { setMintPhase, setPanelStatus } from 'state/mint/reducer'
import { checkMintPhaseStatus, getContractWithSimpleProvider, getMinterAddress } from 'utils'

import { MintPanelStatus } from '../types'

export const useMintPhaseStatus = () => {
  const { account, chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()

  const handleCheckMintPhaseStatus = useCallback(async () => {
    const minterContract = getContractWithSimpleProvider(
      getMinterAddress(chainId && account ? chainId : DEFAULT_CHAIN_ID),
      CONTRACT_ABIS.MINTER,
      chainId && account ? chainId : DEFAULT_CHAIN_ID
    )

    if (!minterContract) return
    try {
      const status = await checkMintPhaseStatus(minterContract)
      dispatch(setMintPhase(status))
    } catch (error) {
      console.log(error)
    }
  }, [account, chainId, dispatch])

  useEffect(() => {
    handleCheckMintPhaseStatus()
  }, [handleCheckMintPhaseStatus])
}

export const useMintPanelStatus = () => {
  const panelStatus = usePanelStatus()

  const dispatch = useAppDispatch()

  const handlePanelStatus = useCallback(
    (status: MintPanelStatus) => {
      dispatch(setPanelStatus(status))
    },
    [dispatch]
  )

  return { panelStatus, handlePanelStatus }
}
