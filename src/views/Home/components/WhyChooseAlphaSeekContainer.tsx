import React from 'react'

import styled from 'styled-components'

import { FlexColumn, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

const AngleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, #a6afc0 2px, transparent 2px) 0 0, linear-gradient(to bottom, #a6afc0 2px, transparent 2px) 0 0,
    linear-gradient(to left, #a6afc0 2px, transparent 2px) 100% 100%, linear-gradient(to top, #a6afc0 2px, transparent 2px) 100% 100% !important;
  background-repeat: no-repeat;
  background-size: ${isMobile ? '16% 16%' : '16% 16%'};

  // transition: background-size 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`

const WhyChooseAlphaSeekContainer: React.FC = () => {
  return (
    <FlexColumn>
      <AngleContainer />

      <FlexColumn padding={'0% 6% 4%'} colWidth={isMobile ? '90%' : '50%'}>
        <FlexColumn padding={isMobile ? '10% 4%' : '8% 0'} gap={'32px'}>
          <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={62} letterSpacing={'-0.02em'} textAlign={'center'}>
            {'Why choose AlphaSeek'}
          </TextWrapper>
          <TextWrapper
            fontWeight={'medium'}
            fontSize={isMobile ? 'xl' : 'sm'}
            lineHeight={isMobile ? 42 : 24}
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
