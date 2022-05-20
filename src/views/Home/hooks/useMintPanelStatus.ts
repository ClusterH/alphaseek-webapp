import { useCallback, useEffect, useState } from 'react'

import { CONTRACT_ABIS, DEFAULT_CHAIN_ID } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPhase } from 'state/mint/reducer'
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
  const [panelStatus, setPanelStatus] = useState<MintPanelStatus>(0)

  const handlePanelStatus = useCallback((status: MintPanelStatus) => {
    setPanelStatus(status)
  }, [])

  return { panelStatus, handlePanelStatus }
}
