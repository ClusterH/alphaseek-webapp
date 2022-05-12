import React from 'react'

import styled from 'styled-components'

import SEEK_IMG from 'assets/images/seek_img_blur2.png'
import { FlexColumn, FlexRow, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'

const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
`

const AboutContainer: React.FC = () => {
  return (
    <FlexRow padding={'0 6%'} isWrap={isMobile}>
      <FlexColumn>
        <SeekImgWrapper src={SEEK_IMG} width={'90%'} />
      </FlexColumn>
      <FlexColumn alignItems={'flex-start'} gap={'24px'}>
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} lineHeight={25} letterSpacing={'0.1em'}>
          {'ABOUT'}
        </TextWrapper>
        <FlexColumn alignItems={'flex-start'} gap={'0px'}>
          <TextWrapper fontSize={'xxxl'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'-0.02em'}>
            {'Alphaseek'}
          </TextWrapper>
          <GradientTextWrapper fontSize={'xxxl'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'-0.02em'}>
            {'Founders Pass.'}
          </GradientTextWrapper>
        </FlexColumn>

        <TextWrapper fontSize={'sm'} fontFamily={'title'} fontWeight={'medium'} lineHeight={24}>
          {
            'The Alphaseek Founders Pass is about handing the power to the holders. Founders Passes will be an exclusive group of knowledgeable traders and investors with a shared goal. Be rewarded with never before seen industry fees, ranging from Free Swaps and Spot trades to 50% off all fees, everywhere. Enjoy industry high referral bonuses, and the ability to vote on the next Spot token for holders to trade with 0 fees!'
          }
        </TextWrapper>
      </FlexColumn>
    </FlexRow>
  )
}

export default AboutContainer
