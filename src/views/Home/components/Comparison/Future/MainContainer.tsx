import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { FlexColumn, InputWrapper, TextWrapper } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { isMobile } from 'utils'

import { convertCurrency2Number } from '../utils'

import FutureTable from './FutureTable'

const FutureComparison: React.FC = () => {
  const [val, setVal] = useState<string>('$500000')
  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/,/g, '')
    const prefix = '$'

    if (v === '') {
      return setVal(v)
    }

    if (!v.includes('$') && !isNaN(parseInt(v))) {
      return setVal(prefix + v)
    }

    if (v.includes(prefix) && v.slice(prefix.length) === '') {
      return setVal('')
    }

    const reg = /^[$]+?\d+?\.?\d*$/

    if (!reg.test(v)) {
      return null
    }

    const [int, float = ''] = v.slice(prefix.length).split('.')
    if (float.length > 0) {
      return null
    }

    const numAmount = Number.parseInt(v.slice(prefix.length))

    if (numAmount > 500000000) {
      return null
    }

    setVal(v)
  }, [])

  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '2% 18% 8%'} gap={isMobile ? '12px' : '0px'}>
      <TextWrapper color={'text2'} fontWeight={'bold'} lineHeight={62} letterSpacing={'0.1em'}>
        {'COMPARISON'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 62} letterSpacing={'-0.02em'}>
        {'See how our fees stack'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 62} letterSpacing={'-0.02em'}>
        {'up against the competition.'}
      </TextWrapper>
      <FutureTable tradeAmount={convertCurrency2Number(val)} />
      <InputWrapper
        width={isMobile ? '100%' : '20%'}
        borderRadius={themeBorderRadius.small}
        value={Number(val.slice(1)).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })}
        onChange={handleOnChange}
      />
    </FlexColumn>
  )
}

export default FutureComparison
