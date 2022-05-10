import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn } from 'styles/components'
import { themeGradient } from 'styles/theme'

import MintProcessContainer from './MintProcessContainer'
import ConnectWalletPanel from './PanelConnectWallet'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: 24px;
  padding: 6% 8%;
`

const MintContainer: React.FC = () => {
  const { account } = useActiveWeb3React()
  return (
    <FlexColumn gap={'0px'} colWidth={'40%'}>
      {/* Need not Claim option? */}
      {/* <MintClaimOptionContainer /> */}
      <MainWrapper colHeight={'50vh'}>{account ? <MintProcessContainer /> : <ConnectWalletPanel />}</MainWrapper>
    </FlexColumn>
  )
}

export default MintContainer
