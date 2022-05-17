import React from 'react'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useAppNavigate, useGetCurrentURLPath } from 'hooks'
import { FlexRow, HoverTextWrapper } from 'styles/components'
import { themeBreakPoint, themeFontWeight } from 'styles/theme'

export const MenuWrapper = styled(FlexRow)`
  display: none;

  @media ${themeBreakPoint.md} {
    display: flex;
    position: absolute;
    top: -38px;
    right: -140px;
    gap: 5em;
  }
`

const Menu: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const pathName = useGetCurrentURLPath()
  return (
    <MenuWrapper rowWidth={'fit-content'}>
      <HoverTextWrapper
        fontFamily={'title'}
        fontWeight={'bold'}
        fontSize={'sm'}
        lineHeight={20}
        letterSpacing={'-0.02em'}
        onClick={() => handleNavigate('/')}
        color={pathName === '/founderpass' ? 'text5' : 'text1'}
      >
        {'Founders Pass'}
      </HoverTextWrapper>
      <HoverTextWrapper
        fontFamily={'title'}
        fontWeight={'bold'}
        fontSize={'sm'}
        lineHeight={20}
        letterSpacing={'-0.02em'}
        onClick={() => handleNavigate('/')}
        color={pathName === '/alphaseek' ? 'text5' : 'text1'}
      >
        {'AlphaSeek'}
      </HoverTextWrapper>
      <HoverTextWrapper
        fontFamily={'title'}
        fontWeight={'bold'}
        fontSize={'sm'}
        lineHeight={20}
        letterSpacing={'-0.02em'}
        onClick={() => handleNavigate('/')}
        color={pathName === '/faq' ? 'text5' : 'text1'}
      >
        {'FAQ'}
      </HoverTextWrapper>
    </MenuWrapper>
  )
}
export default Menu
