import React from 'react'

import styled from 'styled-components'

import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'

import { IUtility } from '../types'

const ItemWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient2};
  transition: transform 500ms ease-in-out 25ms;
  width: calc((100% - 60px) / 4);

  &:hover {
    transform: translateX(0px) translateY(-8px);
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
  @media only screen and (min-width: 901px) and (max-width: 1300px) {
    width: calc((100% - 60px) / 2);
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
  const { isMobile } = useScreenSize()

  return (
    <ItemWrapper
      padding={'28px'}
      borderRadius={themeBorderRadius.small}
      alignItems={'flex-start'}
      // colWidth={isMobile ? '100%' : 'calc((100% - 60px) / 4)'}
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
