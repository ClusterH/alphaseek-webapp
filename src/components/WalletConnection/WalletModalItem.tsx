import React from 'react'

import styled from 'styled-components'

import { FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'

import { IWalletModalItem } from '../Header/types'

const ItemWrapper = styled(FlexRow)<{ isClickable?: boolean }>`
  background-color: #1a1a1a;
  border-radius: ${themeBorderRadius.small};
  padding: 16px 32px;
  box-shadow: ${({ isClickable }) => (isClickable ? themeColor.boxShadow2 : 'none')};
  &:hover {
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : '')};
    box-shadow: none;
  }
`
const GreenCircle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${themeColor.success};
  border-radius: ${themeBorderRadius.circle};
`

const WalletModalItem: React.FC<IWalletModalItem> = ({ name, iconUrl, isClickable = true, handleClick, isActive = false, href }) => {
  return (
    <ItemWrapper onClick={handleClick} isClickable={isClickable && !isActive}>
      <FlexRow rowWidth={'fit-content'} justifyContent={'flex-start'}>
        <ImageContainer src={iconUrl} width={'36px'} borderRadius={themeBorderRadius.none} />
        <TextWrapper fontWeight={'semiBold'} lineHeight={'120%'} letterSpacing={'0.2px'} margin={'0 0 0 40px'}>
          {name}
        </TextWrapper>
        {isActive && <GreenCircle />}
      </FlexRow>
    </ItemWrapper>
  )
}

export default WalletModalItem
