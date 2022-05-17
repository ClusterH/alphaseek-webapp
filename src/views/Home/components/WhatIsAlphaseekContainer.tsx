import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import TRADING_IMG from 'assets/images/trading_img.png'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'

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
  return (
    <FlexColumn padding={isMobile ? '2% 6%' : '0 18%'}>
      <MainWrapper padding={isMobile ? '10% 6%' : '6%'} gap={'24px'} borderRadius={themeBorderRadius.regular}>
        <TextWrapper
          color={'text2'}
          fontFamily={'title'}
          fontSize={isMobile ? 'xl' : 'base'}
          fontWeight={'bold'}
          lineHeight={25}
          letterSpacing={'-0.045em'}
        >
          {'What is Alphaseek'}
        </TextWrapper>
        <FlexColumn gap={'0px'} colWidth={'fit-content'}>
          {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'56%'} />}
          <TextWrapper fontSize={'extra'} fontFamily={'title'} fontWeight={'bold'} lineHeight={80} letterSpacing={'-0.05em'}>
            {'A new standard'}
          </TextWrapper>
          <TextWrapper fontSize={'extra'} fontFamily={'title'} fontWeight={'bold'} lineHeight={80} letterSpacing={'-0.05em'}>
            {'for crypto trading.'}
          </TextWrapper>
        </FlexColumn>
        <FlexRow rowWidth={isMobile ? '100%' : '60%'} margin={isMobile ? '24px' : '64px 0'}>
          <TextWrapper
            fontSize={isMobile ? 'xl' : 'sm'}
            fontFamily={'title'}
            fontWeight={'medium'}
            lineHeight={isMobile ? 42 : 24}
            letterSpacing={'0.02em'}
            textAlign={'center'}
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
