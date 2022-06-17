import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import { UTILITY_LIST } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import UtilityItem from './UtilityItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: 160px;
  top: 62px;
`

const UtilityContainer: React.FC = () => {
  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '6% 18%'} gap={'24px'}>
      {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'16%'} />}
      <TextWrapper color={'text2'} fontWeight={'bold'} lineHeight={25} letterSpacing={'0.1em'}>
        {'UTILITY'}
      </TextWrapper>
      <FlexColumn alignItems={'flex-start'} gap={isMobile ? '12px' : '0px'}>
        <TextWrapper fontSize={'xxxl'} fontWeight={'bold'} lineHeight={52} letterSpacing={'-0.02em'}>
          {'Utility built solely'}
        </TextWrapper>
        <TextWrapper fontSize={'xxxl'} fontWeight={'bold'} lineHeight={52} letterSpacing={'-0.02em'}>
          {'for traders.'}
        </TextWrapper>
      </FlexColumn>
      <FlexRow rowWidth={isMobile ? '100%' : '40%'}>
        <TextWrapper fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'medium'} lineHeight={isMobile ? 42 : 24}>
          {'The Alphaseek Founders Pass was created with the sole purpose of bringing 100% utility to traders worldwide.'}
        </TextWrapper>
      </FlexRow>
      <FlexRow isWrap alignItems={'stretch'} margin={isMobile ? '20px 0' : '40px 0'} gap={'20px'}>
        {UTILITY_LIST.map((item) => (
          <UtilityItem key={item.id} item={item} />
        ))}
      </FlexRow>
    </FlexColumn>
  )
}

export default UtilityContainer
