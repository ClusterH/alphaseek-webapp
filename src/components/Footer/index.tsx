import React from 'react'

import { BsDiscord, BsTwitter } from 'react-icons/bs'
import styled from 'styled-components'

import LOGO from 'assets/images/main_logo_white.png'
import { FlexColumn, FlexRow, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'

const FooterWrapper = styled(FlexRow)`
  border-top: ${themeColor.border1};
  padding: 34px 0;
`
const Footer: React.FC = () => {
  return (
    <FlexColumn padding={isMobile ? '6%' : '6% 18%'}>
      <FooterWrapper alignItems={'flex-start'}>
        <ImageContainer src={LOGO} height={isMobile ? '32px' : '53px'} width={'auto'} />
        <FlexColumn alignItems={'flex-end'} colWidth={'fit-content'}>
          <TextWrapper fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'bold'} lineHeight={16} letterSpacing={'-0.05em'}>
            {'Come Join Us'}
          </TextWrapper>
          <FlexRow rowWidth={'fit-content'}>
            <HoverTextWrapper>
              <BsDiscord size={20} />
            </HoverTextWrapper>
            <HoverTextWrapper>
              <BsTwitter size={20} />
            </HoverTextWrapper>
          </FlexRow>
        </FlexColumn>
      </FooterWrapper>
    </FlexColumn>
  )
}

export default Footer
