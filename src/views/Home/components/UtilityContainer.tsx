import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import { UTILITY_LIST } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { isLargeScreen, isMobile } from 'utils'

import UtilityItem from './UtilityItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: 160px;
  top: 62px;
`

const UtilityContainer: React.FC = () => {
  return (
    <FlexColumn
      alignItems={isMobile ? 'center' : 'flex-start'}
      padding={isMobile ? '67.36px 30px 0' : isLargeScreen ? '4% 178px 0' : '4% 12.3611111% 0'}
      gap={'0px'}
    >
      {/* {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'16%'} />} */}
      <TextWrapper
        fontSize={isMobile ? 16 : isLargeScreen ? 21 : 'base'}
        color={'text2'}
        fontWeight={'bold'}
        lineHeight={'120%'}
        letterSpacing={'0.1em'}
      >
        {'UTILITY'}
      </TextWrapper>
      <FlexColumn alignItems={isMobile ? 'center' : 'flex-start'} gap={'0px'} margin={'16px 0 32px'}>
        <TextWrapper
          fontSize={isMobile ? 32 : 'xxxl'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
          letterSpacing={'-0.02em'}
        >
          {'Utility built solely'}
        </TextWrapper>
        <TextWrapper
          fontSize={isMobile ? 32 : 'xxxl'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
          letterSpacing={'-0.02em'}
        >
          {'for traders.'}
        </TextWrapper>
      </FlexColumn>
      <FlexRow rowWidth={isMobile ? '100%' : '40%'}>
        <TextWrapper
          fontSize={isMobile ? 14 : 'sm'}
          fontWeight={'medium'}
          lineHeight={isMobile ? '21px' : isLargeScreen ? '24px' : 24}
          textAlign={isMobile ? 'center' : 'start'}
        >
          {'The Alphaseek Founders Pass was created with the sole purpose of bringing 100% utility to traders worldwide.'}
        </TextWrapper>
      </FlexRow>
      <FlexRow isWrap alignItems={'stretch'} margin={isMobile ? '32px 0' : '65px 0'} gap={'20px'}>
        {UTILITY_LIST.map((item) => (
          <UtilityItem key={item.id} item={item} />
        ))}
      </FlexRow>
    </FlexColumn>
  )
}

export default UtilityContainer
