import React from 'react'

import styled from 'styled-components'

import { FlexColumn } from 'styles/components'
import { themeGradient } from 'styles/theme'

import MintClaimOptionContainer from './MintClaimOptionContainer'
import ConnectWalletPanel from './PanelConnectWallet'
import MintWithConnectedWalletPanel from './PanelMintWithConnected'
import WalletSelectionPanel from './PanelWalletSelection'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: 0 24px 24px 24px;
  padding: 4%;
`

const MintContainer: React.FC = () => {
  return (
    <FlexColumn gap={'0px'} colWidth={'40%'}>
      <MintClaimOptionContainer />
      <MainWrapper colHeight={'50vh'}>
        {/* <ConnectWalletPanel /> */}
        {/* <WalletSelectionPanel /> */}
        <MintWithConnectedWalletPanel />
      </MainWrapper>
    </FlexColumn>
  )
}

export default MintContainer
