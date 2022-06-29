import React from 'react'

import styled from 'styled-components'

import { ALPHA_SEEK_URL } from 'config/constants'
import { useAppNavigate, useGetCurrentURLPath, useHandleExternalLink } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexRow, HoverTextWrapper } from 'styles/components'
import { themeBreakPoint } from 'styles/theme'

export const MenuWrapper = styled(FlexRow)`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    margin: 36px 0 0 0;
    gap: 5em;
  }
`

const Menu: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const pathName = useGetCurrentURLPath()
  const { handleOpenExternalLink } = useHandleExternalLink()
  const { isLargeScreen } = useScreenSize()

  return (
    <MenuWrapper rowWidth={'fit-content'}>
      <HoverTextWrapper
        fontWeight={'bold'}
        fontSize={isLargeScreen ? 16 : 'sm'}
        lineHeight={'120%'}
        letterSpacing={'-0.02em'}
        onClick={() => handleNavigate('/')}
        color={pathName === '/' ? 'text7' : 'text1'}
      >
        {'Founders Pass'}
      </HoverTextWrapper>
      <HoverTextWrapper
        fontWeight={'bold'}
        fontSize={isLargeScreen ? 16 : 'sm'}
        lineHeight={'120%'}
        letterSpacing={'-0.02em'}
        onClick={() => handleOpenExternalLink(ALPHA_SEEK_URL)}
        color={pathName === '/alphaseek' ? 'text7' : 'text1'}
      >
        {'AlphaSeek'}
      </HoverTextWrapper>
      <HoverTextWrapper
        fontWeight={'bold'}
        fontSize={isLargeScreen ? 16 : 'sm'}
        lineHeight={'120%'}
        letterSpacing={'-0.02em'}
        onClick={() => handleNavigate('/faq')}
        color={pathName === '/faq' ? 'text7' : 'text1'}
      >
        {'FAQ'}
      </HoverTextWrapper>
    </MenuWrapper>
  )
}
export default Menu
