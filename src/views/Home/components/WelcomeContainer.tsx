import React from 'react'

import styled from 'styled-components'

import BG_IMG from 'assets/images/blur1_img.png'
import SEEK_IMG from 'assets/images/seek_img1.png'
import Menu from 'components/Header/Menu'
import Logo from 'components/Logo'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'

import { MintContainer } from './MintPanel'

const ImgWrapper = styled(ImageContainer)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
`

const WelcomeContainer: React.FC = () => {
  return (
    <FlexColumn colHeight={isMobile ? 'auto' : 'calc(100vh)'} padding={isMobile ? '2%' : '2% 18% 0'}>
      {isMobile === false && <ImgWrapper src={BG_IMG} height={'auto'} width={'auto'} />}
      <FlexRow margin={'2% 0 10%'}>
        <Logo />
        <Menu />
      </FlexRow>
      <FlexRow isWrap={isMobile}>
        <MintContainer />
        {isMobile === false && <SeekImgWrapper src={SEEK_IMG} width={'40%'} />}
      </FlexRow>
    </FlexColumn>
  )
}

export default WelcomeContainer
