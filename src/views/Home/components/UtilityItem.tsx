import React from 'react'

import styled from 'styled-components'

import { FlexColumn, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'

import { IUtility } from '../types'

const ItemWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient2};
  transition: transform 500ms ease-in-out 25ms;
  &:hover {
    transform: translateX(0px) translateY(-8px);
  }
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
      padding={'28px'}
      borderRadius={themeBorderRadius.small}
      alignItems={'flex-start'}
      colWidth={isMobile ? '100%' : 'calc((100% - 60px) / 4)'}
    >
      <IconWrapper padding={'16px'} borderRadius={themeBorderRadius.small} colWidth={'fit-content'}>
        <ImageContainer src={item.iconUrl} width={'24px'} />
      </IconWrapper>
      <TitleWrapper fontSize={isMobile ? 16 : 'sm'} fontWeight={'bold'} lineHeight={'150%'} margin={'48px 0 12px'}>
        {item.title}
      </TitleWrapper>
      <TextWrapper fontSize={isMobile ? 13 : 'xs'} fontWeight={'medium'} lineHeight={'150%'} margin={'0 0 6px'}>
        {item.detail}
      </TextWrapper>
    </ItemWrapper>
  )
}

export default UtilityItem
