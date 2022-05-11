import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow } from 'styles/components'
import { themeGradient } from 'styles/theme'
import { useMintPanelStatus } from 'views/Home/hooks'

import AmountCounterPanel from './PanelAmounterCounter'
import ColdWalletInputPanel from './PanelColdWalletInput'
import WalletSelectionPanel from './PanelWalletSelection'

const MintProcessContainer: React.FC = () => {
  const { panelStatus, handlePanelStatus } = useMintPanelStatus()

  const getPanelContent = () => {
    if (panelStatus === 0) return <AmountCounterPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 1) return <WalletSelectionPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 2) return <ColdWalletInputPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 3) return <AmountCounterPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
  }

  return <>{getPanelContent()}</>
}

export default MintProcessContainer
