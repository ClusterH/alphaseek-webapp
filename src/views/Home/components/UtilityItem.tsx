import React from 'react'

import styled from 'styled-components'

import { FlexColumn, FlexRow, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'

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
    <ItemWrapper padding={'28px'} borderRadius={themeBorderRadius.small} alignItems={'flex-start'} colWidth={'22%'}>
      <IconWrapper padding={'16px'} borderRadius={themeBorderRadius.small} colWidth={'fit-content'} margin={'0 0 36px'}>
        <ImageContainer src={item.iconUrl} width={'24px'} />
      </IconWrapper>
      <TitleWrapper fontFamily={'title'} fontSize={'sm'} lineHeight={24} margin={'24px 0'}>
        {item.title}
      </TitleWrapper>
      <TextWrapper fontFamily={'title'} fontSize={'xs'} fontWeight={'medium'} lineHeight={20}>
        {item.detail}
      </TextWrapper>
    </ItemWrapper>
  )
}

export default UtilityItem
