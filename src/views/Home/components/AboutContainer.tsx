import React from 'react'

import styled from 'styled-components'

import SEEK_IMG from 'assets/images/seek_img_blur2.png'
import { FlexColumn, FlexRow, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isLargeScreen, isMobile } from 'utils'

const MainWrapper = styled(FlexRow)`
  flex-direction: ${isMobile ? 'row' : 'row-reverse'};
`
const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
`

const AboutContainer: React.FC = () => {
  return (
    <MainWrapper
      margin={isMobile ? 'calc(80px + 54px) 0 0' : isLargeScreen ? 'calc(124px + 7.3vw) 0 0' : 'calc(8.61vw + 7.3vw) 0 0'}
      padding={isMobile ? '0% 30px' : isLargeScreen ? '60px 178px 0' : '4.177vw 12.3611111vw 0'}
      isWrap={isMobile}
    >
      <FlexColumn alignItems={isMobile ? 'center' : 'flex-start'} gap={'0px'}>
        <TextWrapper fontSize={isMobile ? 16 : 'base'} color={'text2'} fontWeight={'bold'} lineHeight={'120%'} letterSpacing={'0.1em'}>
          {'ABOUT'}
        </TextWrapper>
        <FlexColumn alignItems={isMobile ? 'center' : 'flex-start'} gap={'0px'} margin={'16px 0 32px'}>
          <TextWrapper
            fontSize={isMobile ? 32 : 'xxxl'}
            fontWeight={'bold'}
            lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
            letterSpacing={'-0.02em'}
          >
            {'Alphaseek'}
          </TextWrapper>
          <GradientTextWrapper
            fontSize={isMobile ? 32 : 'xxxl'}
            fontWeight={'bold'}
            lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
            letterSpacing={'-0.02em'}
          >
            {'Founders Pass.'}
          </GradientTextWrapper>
        </FlexColumn>

        <TextWrapper
          fontSize={isMobile ? 14 : 'sm'}
          fontWeight={'medium'}
          lineHeight={isMobile ? '21px' : isLargeScreen ? '24px' : 24}
          textAlign={isMobile ? 'center' : 'start'}
        >
          {
            'The Alphaseek Founders Pass is about handing the power to the holders. Founders Passes will be an exclusive group of knowledgeable traders and investors with a shared goal. Be rewarded with never before seen industry fees, ranging from Free Swaps and Spot trades to 50% off all fees, everywhere. Enjoy industry high referral bonuses, and the ability to vote on the next Spot token for holders to trade with 0 fees!'
          }
        </TextWrapper>
      </FlexColumn>
      <ImageContainer src={SEEK_IMG} width={isMobile ? '100%' : isLargeScreen ? '534px' : '37.083vw'} />
    </MainWrapper>
  )
}

export default AboutContainer
