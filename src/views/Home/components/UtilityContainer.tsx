import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import { UTILITY_LIST } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'

import UtilityItem from './UtilityItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: -100px;
  top: 0;
`

const UtilityContainer: React.FC = () => {
  return (
    <FlexColumn alignItems={'flex-start'} padding={'0 6%'} gap={'24px'}>
      <BlurImgWrapper src={BLUR_IMG} width={'16%'} />
      <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} lineHeight={25} letterSpacing={'0.1em'}>
        {'UTILITY'}
      </TextWrapper>
      <FlexColumn alignItems={'flex-start'} gap={'0px'}>
        <TextWrapper fontSize={'xxxl'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'-0.02em'}>
          {'Utility built solely'}
        </TextWrapper>
        <TextWrapper fontSize={'xxxl'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'-0.02em'}>
          {'for traders.'}
        </TextWrapper>
      </FlexColumn>
      <FlexRow rowWidth={'40%'}>
        <TextWrapper fontSize={'sm'} fontFamily={'title'} fontWeight={'medium'} lineHeight={24}>
          {'The Alphaseek Founders Pass was created with the sole purpose of bringing 100% utility to traders worldwide.'}
        </TextWrapper>
      </FlexRow>
      <FlexRow isWrap alignItems={'stretch'} gap={'20px'}>
        {UTILITY_LIST.map((item) => (
          <UtilityItem key={item.id} item={item} />
        ))}
      </FlexRow>
    </FlexColumn>
  )
}

export default UtilityContainer
