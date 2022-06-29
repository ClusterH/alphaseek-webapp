import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_img1.svg'
import TRADING_IMG from 'assets/images/trading_img.png'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'

const MainWrapper = styled(FlexColumn)`
  background: linear-gradient(180deg, #1e1e1e 0%, rgba(51, 51, 51, 0) 100%);
  filter: ${themeColor.dropShadow3};
`
const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: -110px;
  top: -46px;
`

const WhatIsAlphaseekContainer: React.FC = () => {
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()
  return (
    <FlexColumn padding={isMobile ? '34px 0px 0px' : isLargeScreen ? '104px 178px 0' : '7.22% 12.3611111vw 0'}>
      <MainWrapper
        padding={isMobile ? '51px 0px 0' : isLargeScreen ? '71px 75px 0' : '4.93% 5.2% 0'}
        gap={isMobile ? '16px' : '22px'}
        borderRadius={isMobile ? themeBorderRadius.none : themeBorderRadius.regular}
      >
        <TextWrapper color={'text2'} fontSize={21} fontWeight={'bold'} lineHeight={'120%'} letterSpacing={'-0.045em'}>
          {'What is Alphaseek'}
        </TextWrapper>
        <FlexColumn gap={'0px'} colWidth={'fit-content'}>
          {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'56%'} />}
          <TextWrapper
            fontSize={isMobile ? 48 : isLargeScreen ? 80 : 'extra'}
            fontWeight={'bold'}
            lineHeight={isMobile ? '48px' : isLargeScreen ? '80px' : `${(100 * 80) / screenWidth}vmax`}
            letterSpacing={'-0.05em'}
          >
            {'A new standard'}
          </TextWrapper>
          <TextWrapper
            fontSize={isMobile ? 48 : isLargeScreen ? 80 : 'extra'}
            fontWeight={'bold'}
            lineHeight={isMobile ? '48px' : isLargeScreen ? '80px' : `${(100 * 80) / screenWidth}vmax`}
            letterSpacing={'-0.05em'}
          >
            {'for crypto trading.'}
          </TextWrapper>
        </FlexColumn>
        <FlexRow rowWidth={isMobile ? '100%' : '62.38%'} margin={isMobile ? '16px 0px 35px' : '42px 0 59px'}>
          <TextWrapper
            fontSize={isMobile ? 13 : isLargeScreen ? 16 : 'sm'}
            fontWeight={'medium'}
            lineHeight={'150%'}
            letterSpacing={isMobile ? '1px' : '0.02em'}
            textAlign={'center'}
            margin={isMobile ? '0 26px' : '0px'}
          >
            {
              'Alphaseek is the first Crypto Exchange built by traders, for traders. Our goal is to create the new standard of Crypto Trading. We are the fastest exchange with the most dynamic API options and a never before seen amount of order types to help you beat the market in as many ways as possible!'
            }
          </TextWrapper>
        </FlexRow>
        <ImageContainer src={TRADING_IMG} />
      </MainWrapper>
    </FlexColumn>
  )
}

export default WhatIsAlphaseekContainer
