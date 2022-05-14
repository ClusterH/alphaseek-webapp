import React from 'react'

import styled from 'styled-components'

import BG_IMG from 'assets/images/blur1_img.png'
import SEEK_IMG from 'assets/images/seek_img1.png'
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
const LogoTextWrapper = styled(TextWrapper)`
  position: absolute;
  bottom: -30px;
  left: 86px;
`
const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
`

const WelcomeContainer: React.FC = () => {
  return (
    <FlexColumn colHeight={isMobile ? 'auto' : 'calc(100vh)'} padding={'2% 12% 0'}>
      <ImgWrapper src={BG_IMG} height={'auto'} width={'auto'} />
      <FlexRow margin={'24px 0'}>
        <Logo />
        <LogoTextWrapper fontFamily={'title'} fontSize={'xxl'} fontWeight={'bold'} lineHeight={38} letterSpacing={'-0.02em'}>
          {'Founders Pass'}
        </LogoTextWrapper>
      </FlexRow>
      <FlexRow>
        <MintContainer />
        <SeekImgWrapper src={SEEK_IMG} width={'40%'} />
      </FlexRow>
    </FlexColumn>
  )
}

export default WelcomeContainer
