import React from 'react'

import styled from 'styled-components'

import LOGO from 'assets/images/main_logo.png'
import { useAppNavigate, useScroll } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { ImageContainer } from 'styles/components'

const LogoWrapper = styled(ImageContainer)<{ isScroll: boolean; isMobile: boolean; isLargeScreen: boolean }>`
  z-index: 1;
  cursor: pointer;
  height: ${({ isScroll, isMobile, isLargeScreen }) => (isMobile ? '54px' : isScroll ? '72px' : isLargeScreen ? '109px' : '7.57vw')};

  -webkit-transition: height 500ms linear;
  -ms-transition: height 500ms linear;
  transition: height 500ms linear;
`
const Logo: React.FC = () => {
  const { isScroll } = useScroll()
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()
  const { handleNavigate } = useAppNavigate()
  return (
    <LogoWrapper
      src={LOGO}
      borderRadius={'0'}
      isScroll={isScroll}
      width={'auto'}
      isMobile={isMobile}
      isLargeScreen={isLargeScreen}
      alt="AlphaSeek Logo"
      onClick={() => {
        handleNavigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

export default Logo
