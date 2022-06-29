import React from 'react'

import { BsDiscord, BsTwitter } from 'react-icons/bs'
import styled from 'styled-components'

import LOGO from 'assets/images/main_logo_white.png'
import { ALPHA_SEEK_TWITTER } from 'config/constants'
import { useAppNavigate, useHandleExternalLink } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'

// const MainWrapper = styled(FlexColumn)`
//   @media only screen and (max-width: 900px) {
//     height: auto;
//     padding: 0 30px 30px;
//   }
//   @media only screen and (min-width: 901px) and (max-width: 1439px) {
//     height: 19.583%;
//     padding: 0% 12.3611111vw;
//   }
//   @media only screen and (min-width: 1440px) {
//     height: 282px;
//     padding: 0 ${178 + (screenWidth - 1440) / 2}px;
//   }
// `
const FooterWrapper = styled(FlexRow)`
  border-top: ${themeColor.border1};
  padding: 34px 0;
`
const Footer: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const { handleOpenExternalLink } = useHandleExternalLink()

  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()

  return (
    <FlexColumn
      padding={isMobile ? '0 30px 30px' : isLargeScreen ? `0 ${178 + (screenWidth - 1440) / 2}px` : '0% 12.3611111vw'}
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
