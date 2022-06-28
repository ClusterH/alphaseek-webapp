import React, { memo } from 'react'

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'

import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper } from 'styles/components'
import { isLargeScreen, isMobile } from 'utils'
import { IFAQItem } from 'views/Home/types'

const ItemWrapper = styled(FlexRow)`
  cursor: pointer;
  padding: 16px 0;
  border-top: 1px solid #a5a5ff26;
  border-bottom: 1px solid #a5a5ff26;
`
const DetailWrapper = styled(FlexRow)<{ isOpen: boolean }>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  transition: height 500ms ease-in-out 25ms, opacity 500ms ease-out;
`
const FAQItem: React.FC<{ item: IFAQItem; openedItemID: number; handleOpenItemID: (item: IFAQItem) => void }> = ({
  item,
  openedItemID,
  handleOpenItemID,
}) => {
  return (
    <FlexColumn onClick={() => handleOpenItemID(item)} alignItems={'flex-start'} gap={'0px'}>
      <ItemWrapper style={{ flexGrow: 1 }}>
        <FlexRow rowWidth={'calc(100% - 24px)'}>
          <TextWrapper fontSize={isMobile ? 16 : 18} fontWeight={'semiBold'} lineHeight={'120%'} textAlign={'start'}>
            {item.title}
          </TextWrapper>
        </FlexRow>
        <HoverTextWrapper>{openedItemID === item.id ? <AiOutlineClose size={18} /> : <AiOutlinePlus size={18} />}</HoverTextWrapper>
      </ItemWrapper>
      <DetailWrapper isOpen={openedItemID === item.id}>
        <TextWrapper
          opacity={0.75}
          fontSize={isMobile || isLargeScreen ? 16 : 'sm'}
          fontWeight={'medium'}
          lineHeight={'150%'}
          textAlign={'start'}
          margin={'16px 24px'}
        >
          {item.description}
        </TextWrapper>
      </DetailWrapper>
    </FlexColumn>
  )
}

export default memo(FAQItem)
