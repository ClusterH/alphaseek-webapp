import React, { useCallback } from 'react'

import useEtherSWR from 'ether-swr'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintPhase } from 'state/mint/reducer'
import { FlexColumn } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { getMinterAddress, isLargeScreen, isMobile } from 'utils'
import { useMintPanelStatus } from 'views/Home/hooks'

import ColdWalletInputPanel from './PanelColdWalletInput'
import ConnectWalletPanel from './PanelConnectWallet'
import MintPanel from './PanelMint'
import WalletSelectionPanel from './PanelWalletSelection'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: ${isMobile ? themeBorderRadius.small : themeBorderRadius.regular};
  padding: ${isMobile ? '7.304% 9.926%' : isLargeScreen ? '40px 55px' : '10.3% 7.49%'};
  z-index: 1;
`

const MintContainer: React.FC = () => {
  const { chainId } = useActiveWeb3React()
  const { panelStatus, handlePanelStatus } = useMintPanelStatus()

  const dispatch = useAppDispatch()

  useEtherSWR([getMinterAddress(chainId!), 'phase'], {
    subscribe: [
      {
        name: 'MintPhaseSet',
        topics: [null],
        on: (data: any, phase: any, event: number) => {
          dispatch(setMintPhase(phase))
        },
      },
    ],
  })

  const getPanelContent = useCallback(() => {
    if (panelStatus === 0) return <ConnectWalletPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    if (panelStatus === 1) return <WalletSelectionPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 2) return <ColdWalletInputPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 3) return <MintPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
  }, [handlePanelStatus, panelStatus])

  return (
    <MainWrapper
      gap={'0px'}
      colWidth={isMobile ? '100%' : isLargeScreen ? '534px' : '37.083%'}
      colHeight={isMobile ? '69.614vw' : isLargeScreen ? '452px' : '31.39vw'}
    >
      {getPanelContent()}
    </MainWrapper>
  )
}

export default MintContainer
