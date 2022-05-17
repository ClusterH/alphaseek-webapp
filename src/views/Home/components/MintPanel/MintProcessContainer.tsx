import React, { useCallback } from 'react'

import { useMintPanelStatus } from 'views/Home/hooks'

import AmountCounterPanel from './PanelAmountCounter'
import ColdWalletInputPanel from './PanelColdWalletInput'
import WalletSelectionPanel from './PanelWalletSelection'

const MintProcessContainer: React.FC = () => {
  const { panelStatus, handlePanelStatus } = useMintPanelStatus()

  const getPanelContent = useCallback(() => {
    if (panelStatus === 0) return <WalletSelectionPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 1) return <ColdWalletInputPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
    else if (panelStatus === 2) return <AmountCounterPanel panelStatus={panelStatus} handlePanelStatus={handlePanelStatus} />
  }, [handlePanelStatus, panelStatus])

  return <>{getPanelContent()}</>
}

export default MintProcessContainer
