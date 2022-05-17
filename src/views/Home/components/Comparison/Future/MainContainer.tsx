import React, { useCallback, useState } from 'react'

import { FlexColumn, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import FutureTable from './FutureTable'

const FutureComparison: React.FC = () => {
  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '6% 18%'} gap={isMobile ? '12px' : '0px'}>
      <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'0.1em'}>
        {'COMPARISON'}
      </TextWrapper>
      <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 42} letterSpacing={'-0.02em'}>
        {'See how our futures stack'}
      </TextWrapper>
      <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 42} letterSpacing={'-0.02em'}>
        {'up against the competition.'}
      </TextWrapper>
      <FutureTable />
    </FlexColumn>
  )
}

export default FutureComparison
