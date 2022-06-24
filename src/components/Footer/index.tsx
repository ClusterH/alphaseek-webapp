import React from 'react'

import { BsDiscord, BsTwitter } from 'react-icons/bs'
import styled from 'styled-components'

import LOGO from 'assets/images/main_logo_white.png'
import { ALPHA_SEEK_TWITTER } from 'config/constants'
import { useAppNavigate, useHandleExternalLink } from 'hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isLargeScreen, isMobile } from 'utils'

const FooterWrapper = styled(FlexRow)`
  border-top: ${themeColor.border1};
  padding: 34px 0;
`
const Footer: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <FlexColumn
      padding={isMobile ? '0 30px 30px' : isLargeScreen ? '0 178px' : '0 12.3611111%'}
      colHeight={isMobile ? 'auto' : isLargeScreen ? '282px' : '19.583%'}
    >
      <FooterWrapper alignItems={'flex-start'}>
        <ImageContainer src={LOGO} height={isMobile ? '32px' : '53px'} width={'auto'} onClick={() => handleNavigate('/')} />
        <FlexColumn alignItems={'flex-end'} colWidth={'fit-content'} gap={'33px'}>
          <TextWrapper fontSize={isMobile ? 16 : 'sm'} fontWeight={'bold'} lineHeight={'100%'} letterSpacing={'-0.05em'}>
            {'Come Join Us'}
          </TextWrapper>
          <FlexRow rowWidth={'fit-content'} gap={'22px'}>
            <HoverTextWrapper>
              <BsDiscord size={24} />
            </HoverTextWrapper>
            <HoverTextWrapper onClick={() => handleOpenExternalLink(ALPHA_SEEK_TWITTER)}>
              <BsTwitter size={24} />
            </HoverTextWrapper>
          </FlexRow>
        </FlexColumn>
      </FooterWrapper>
    </FlexColumn>
  )
}

export default Footer
