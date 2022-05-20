import React from 'react'

import styled from 'styled-components'

import { useScroll } from 'hooks'
import { FlexColumn, FlexRow } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'

import Logo from '../Logo'

import Hamburger from './hamburgerIcon'
import Menu from './Menu'

const HeaderContainer = styled(FlexRow)<{ isScroll: boolean }>`
  z-index: 9;
  position: fixed;
  top: 0;
  height: ${({ isScroll }) => (isMobile ? 'auto' : isScroll ? '80px' : '160px')};
  padding: ${isMobile ? '2% 6%' : '0 18%'};
  background-color: ${({ isScroll }) => (isMobile || isScroll ? themeColor.background1 : 'transparent')};

  -webkit-transition: background-color 500ms linear, height 500ms linear;
  -ms-transition: background-color 500ms linear, height 500ms linear;
  transition: background-color 500ms linear, height 500ms linear;
`

const Header: React.FC = () => {
  const { isScroll } = useScroll()

  return (
    <HeaderContainer isScroll={isScroll}>
      <FlexRow rowWidth={'fit-content'} rowHeight={'100%'} alignItems={'flex-end'}>
        <Logo />
      </FlexRow>
      <FlexColumn colWidth={'fit-content'} colHeight={'100%'} alignItems={'flex-end'} justifyContent={'flex-start'}>
        <Menu />
        <Hamburger />
      </FlexColumn>
    </HeaderContainer>
  )
}

export default Header
