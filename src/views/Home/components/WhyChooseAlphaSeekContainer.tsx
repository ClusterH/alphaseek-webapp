import React from 'react'

import styled from 'styled-components'

import BLUR_IMG1 from 'assets/images/blur_img2.png'
import BLUR_IMG2 from 'assets/images/blur_img3.png'
import BLUR_IMG3 from 'assets/images/blur_img4.svg'
import { FlexColumn, ImageContainer, TextWrapper } from 'styles/components'
import { isLargeScreen, isMobile, screenWidth } from 'utils'

const AngleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, rgb(166, 175, 192) 2px, transparent 2px),
    linear-gradient(rgb(166, 175, 192) 2px, transparent 2px), linear-gradient(to left, rgb(166, 175, 192) 2px, transparent 2px),
    linear-gradient(to top, rgb(166, 175, 192) 2px, transparent 2px);
  background-position-x: 0px, 0px, 100%, 100%;
  background-position-y: 0px, 0px, 100%, 100%;
  background-size: 175px 175px;
  background-repeat: no-repeat;
  transition: background-size 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`

const WhyChooseAlphaSeekContainer: React.FC = () => {
  return (
    <FlexColumn>
      {isMobile === false ? (
        <>
          <ImageContainer
            src={BLUR_IMG1}
            width={'48%'}
            position={'absolute'}
            top={'-70%'}
            left={isLargeScreen ? `-${(screenWidth - 1440) / 2}px` : '0px'}
          />
          <ImageContainer
            src={BLUR_IMG2}
            width={'48%'}
            position={'absolute'}
            top={'-50%'}
            right={isLargeScreen ? `-${(screenWidth - 1440) / 2}px` : '0px'}
          />
        </>
      ) : (
        <ImageContainer src={BLUR_IMG3} width={'50%'} position={'absolute'} top={'-10%'} left={'-30px'} />
      )}

      <FlexColumn padding={isMobile ? '0' : '48px 98px'} colWidth={isMobile ? '90%' : isLargeScreen ? '818px' : '56.8%'}>
        {isMobile === false && (
          <>
            <AngleContainer />
          </>
        )}
        <FlexColumn gap={'32px'}>
          <FlexColumn gap={'0px'} padding={isMobile ? '0 32px' : '0'}>
            <TextWrapper
              fontWeight={'bold'}
              fontSize={isMobile ? 32 : 'xxxl'}
              lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
              letterSpacing={'-0.02em'}
              textAlign={'center'}
            >
              {'Why choose AlphaSeek'}
            </TextWrapper>
          </FlexColumn>

          <TextWrapper
            fontWeight={'medium'}
            fontSize={isMobile ? 14 : 'sm'}
            lineHeight={'150%'}
            letterSpacing={'0.02em'}
            textAlign={'center'}
          >
            {
              'Alphaseek has a laid out plan to get to market and start growing day one. A key fact to note is that the exchange is fully built out already. We have spent over 2 years and $2,000,000 to build out a game changing exchange. We have an exclusive partnership with the second largest crypto liquidity provider in the world, we were able to achieve this from our vast network in the space and trusted vision in Alphaseek.'
            }
          </TextWrapper>
          <TextWrapper
            fontWeight={'medium'}
            fontSize={isMobile ? 'xl' : 'sm'}
            lineHeight={isMobile ? 42 : 24}
            letterSpacing={'0.02em'}
            textAlign={'center'}
          >
            {
              'After mint, We will be taking $7,000,000 to run the exchange. This will include adding new features and trading options as frequently as possible. Running mass marketing campaigns and teaming up with some of the largest names in the Crypto space. Check out the Alphaseek Whitepaper here for all the advantages we hold and why we are built completely different from all of the outdated major exchanges!'
            }
          </TextWrapper>
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  )
}

export default WhyChooseAlphaSeekContainer
