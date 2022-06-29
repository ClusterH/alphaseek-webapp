import React from 'react'

import styled from 'styled-components'

import { useScroll } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow } from 'styles/components'
import { themeColor } from 'styles/theme'

import Logo from '../Logo'

import Hamburger from './hamburgerIcon'
import Menu from './Menu'

const HeaderContainer = styled(FlexRow)<{ isScroll: boolean; isMobile: boolean; isLargeScreen: boolean; screenWidth: number }>`
  z-index: 9;
  position: fixed;
  top: 0;
  height: ${({ isScroll, isMobile, isLargeScreen }) => (isMobile ? 'auto' : isScroll ? '96px' : isLargeScreen ? '194px' : '13.472vw')};
  padding: ${({ isMobile, isLargeScreen, screenWidth }) =>
    isMobile ? '25px 30px 25px' : isLargeScreen ? `0% ${178 + (screenWidth - 1440) / 2}px 0` : '0% 12.3611111vw 0'};
  background-color: ${({ isScroll }) => (isScroll ? themeColor.background1 : 'transparent')};
  -webkit-transition: background-color 500ms linear, height 500ms linear;
  -ms-transition: background-color 500ms linear, height 500ms linear;
  transition: background-color 500ms linear, height 500ms linear;
`

const Header: React.FC = () => {
  const { isScroll } = useScroll()
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()

  return (
    <HeaderContainer isScroll={isScroll} isLargeScreen={isLargeScreen} isMobile={isMobile} screenWidth={screenWidth}>
      <FlexColumn colWidth={'fit-content'} colHeight={'100%'} justifyContent={isScroll ? 'center' : 'flex-end'}>
        <Logo />
      </FlexColumn>
      <FlexColumn colWidth={'fit-content'} colHeight={'100%'} alignItems={'flex-end'} justifyContent={'flex-start'}>
        <Menu />
        <Hamburger />
      </FlexColumn>
    </HeaderContainer>
  )
}

export default Header
