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
  }
`

const Menu: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const pathName = useGetCurrentURLPath()
  return (
    <MenuWrapper rowWidth={'fit-content'}>
      <HoverTextWrapper onClick={() => handleNavigate('/')} color={pathName === '/' ? 'text5' : 'text1'}>
        {'Home'}
      </HoverTextWrapper>
    </MenuWrapper>
  )
}
export default Menu
