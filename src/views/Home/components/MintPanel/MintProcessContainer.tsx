import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow } from 'styles/components'
import { themeGradient } from 'styles/theme'
import { useMintPanelStatus } from 'views/Home/hooks'

import AmountCounterPanel from './AmounterCounterPenel'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: 0 24px 24px 24px;
  padding: 6% 8%;
`

const MintProcessContainer: React.FC = () => {
  const { panelStatus, handlePanelStatus } = useMintPanelStatus()

  const getPanelContent = () => {
    if (panelStatus === 0) return <AmountCounterPanel />
    else if (panelStatus === 1) return <FlexRow>{'Confirm Wallet'}</FlexRow>
  }

  return <>{getPanelContent()}</>
}

export default MintProcessContainer
