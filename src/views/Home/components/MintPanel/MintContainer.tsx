import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn } from 'styles/components'
import { themeGradient } from 'styles/theme'

import MintClaimOptionContainer from './MintClaimOptionContainer'
import ConnectWalletPanel from './PanelConnectWallet'
import MintWithConnectedWalletPanel from './PanelMintWithConnected'
import WalletSelectionPanel from './PanelWalletSelection'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: 0 24px 24px 24px;
  padding: 6% 8%;
`

const MintContainer: React.FC = () => {
  const { account } = useActiveWeb3React()
  return (
    <FlexColumn gap={'0px'} colWidth={'40%'}>
      <MintClaimOptionContainer />
      <MainWrapper colHeight={'50vh'}>
        <ConnectWalletPanel />
        {/* <WalletSelectionPanel /> */}
        {/* <MintWithConnectedWalletPanel /> */}
      </MainWrapper>
    </FlexColumn>
  )
}

export default MintContainer
