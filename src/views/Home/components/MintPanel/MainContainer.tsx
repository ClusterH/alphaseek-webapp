import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'
import { useGetMintPrice } from 'views/Home/hooks'

import MintProcessContainer from './MintProcessContainer'
import ConnectWalletPanel from './PanelConnectWallet'

const MainWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient1};
  border-radius: ${isMobile ? themeBorderRadius.small : themeBorderRadius.regular};
  padding: ${isMobile ? '2% 4%' : '6% 8%'};
`

const MintContainer: React.FC = () => {
  const { account } = useActiveWeb3React()
  useGetMintPrice()

  return (
    <FlexColumn gap={'0px'} colWidth={isMobile ? '100%' : '50%'}>
      {/* Need not Claim option? */}
      {/* <MintClaimOptionContainer /> */}
      <MainWrapper colHeight={isMobile ? '40vh' : '50vh'}>{account ? <MintProcessContainer /> : <ConnectWalletPanel />}</MainWrapper>
    </FlexColumn>
  )
}

export default MintContainer
