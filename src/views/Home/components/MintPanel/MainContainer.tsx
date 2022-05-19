import React, { useCallback } from 'react'

import styled from 'styled-components'

import { FlexColumn } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'
import { useMintPanelStatus } from 'views/Home/hooks'

import ColdWalletInputPanel from './PanelColdWalletInput'
import ConnectWalletPanel from './PanelConnectWallet'
import MintPanel from './PanelMint'
import WalletSelectionPanel from './PanelWalletSelection'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: ${isMobile ? themeBorderRadius.small : themeBorderRadius.regular};
  padding: ${isMobile ? '2% 4%' : '6% 8%'};
`

const MintContainer: React.FC = () => {
  const { panelStatus, handlePanelStatus } = useMintPanelStatus()

  const getPanelContent = useCallback(() => {
    if (panelStatus === 0) return <ConnectWalletPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    if (panelStatus === 1) return <WalletSelectionPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 2) return <ColdWalletInputPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 3) return <MintPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
  }, [handlePanelStatus, panelStatus])

  return (
    <FlexColumn gap={'0px'} colWidth={isMobile ? '100%' : '50%'}>
      <MainWrapper colHeight={isMobile ? '40vh' : '50vh'}>{getPanelContent()}</MainWrapper>
    </FlexColumn>
  )
}

export default MintContainer
