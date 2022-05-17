import React from 'react'

import { FlexColumn, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import FutureTable from './FutureTable'

const FutureComparison: React.FC = () => {
  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '2% 18% 6%'} gap={isMobile ? '12px' : '0px'}>
      <TextWrapper color={'text2'} fontWeight={'bold'} lineHeight={42} letterSpacing={'0.1em'}>
        {'COMPARISON'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 42} letterSpacing={'-0.02em'}>
        {'See how our fees stack'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 42} letterSpacing={'-0.02em'}>
        {'up against the competition.'}
      </TextWrapper>
      <FutureTable tradeAmount={5000000} />
    </FlexColumn>
  )
}

export default FutureComparison
