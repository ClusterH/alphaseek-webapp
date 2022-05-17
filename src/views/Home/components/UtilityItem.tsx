import React from 'react'

import styled from 'styled-components'

import { FlexColumn, FlexRow, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'

import { IUtility } from '../types'

const ItemWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient2};
`
const IconWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient3};
`
const TitleWrapper = styled(GradientTextWrapper)`
  background: ${themeGradient.textGradient2};
  -webkit-background-clip: text;
  color: transparent;
`

const UtilityItem: React.FC<{ item: IUtility }> = ({ item }) => {
  return (
    <ItemWrapper
      padding={isMobile ? '12px' : '28px'}
      borderRadius={themeBorderRadius.small}
      alignItems={'flex-start'}
      colWidth={isMobile ? '100%' : 'calc((100% - 60px) / 4)'}
    >
      <IconWrapper padding={isMobile ? '12px' : '16px'} borderRadius={themeBorderRadius.small} colWidth={'fit-content'}>
        <ImageContainer src={item.iconUrl} width={isMobile ? '16px' : '24px'} />
      </IconWrapper>
      <TitleWrapper
        fontFamily={'title'}
        fontSize={isMobile ? 'xxl' : 'sm'}
        lineHeight={isMobile ? 42 : 24}
        margin={isMobile ? '34px 0 12px' : '48px 0 12px'}
      >
        {item.title}
      </TitleWrapper>
      <TextWrapper
        fontFamily={'title'}
        fontSize={isMobile ? 'xl' : 'xs'}
        fontWeight={'medium'}
        lineHeight={isMobile ? 42 : 20}
        margin={'0 0 6px'}
      >
        {item.detail}
      </TextWrapper>
    </ItemWrapper>
  )
}

export default UtilityItem
