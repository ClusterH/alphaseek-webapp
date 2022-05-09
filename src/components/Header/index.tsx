import React from 'react'

import styled from 'styled-components'

import { FlexColumn, FlexRow } from 'styles/components'
import { themeColor } from 'styles/theme'

import Logo from '../Logo'

import Hamburger from './hamburgerIcon'

const HeaderContainer = styled(FlexRow)`
  z-index: 9;
  position: fixed;
  top: 0;
  height: 120px;
  padding: 0 6%;
  background-color: ${themeColor.background1};
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <FlexColumn colWidth={'fit-content'}>
        <FlexRow justifyContent={'flex-start'} gap={'24px'}>
          <Logo />
        </FlexRow>
      </FlexColumn>
      <FlexColumn colWidth={'fit-content'}>
        <FlexRow justifyContent={'flex-end'}>
          {/* <Menu /> */}
          {/* <GasPriceContainer />
          <WalletConnectionContainer /> */}
          <Hamburger />
        </FlexRow>
      </FlexColumn>
    </HeaderContainer>
  )
}

export default Header
