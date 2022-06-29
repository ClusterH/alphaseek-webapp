import React, { ChangeEvent, useCallback, useState } from 'react'

import styled from 'styled-components'

import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, InputWrapper, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'

import { convertCurrency2Number } from '../utils'

import FutureTable from './FutureTable'

const AmountInputWrapper = styled(InputWrapper)`
  letter-spacing: -0.02em;
  line-height: 19px;
`

const FutureComparison: React.FC = () => {
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()
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
    <FlexColumn
      alignItems={'flex-start'}
      padding={isMobile ? '65px 30px 144.55px' : isLargeScreen ? '213px 178px 306px' : '14.791% 12.3611111vw 21.25%'}
      gap={'0px'}
    >
      <TextWrapper
        color={'text2'}
        fontSize={isMobile ? 16 : isLargeScreen ? 21 : 'base'}
        fontWeight={'bold'}
        lineHeight={'120%'}
        letterSpacing={'0.1em'}
        margin={isMobile ? '0 0 13px 0' : '0 0 16px 0'}
      >
        {'COMPARISON'}
      </TextWrapper>
      <FlexRow gap={'0px'} rowWidth={isMobile ? '100%' : isLargeScreen ? '636px' : '44.17%'}>
        <TextWrapper
          fontSize={isMobile ? 32 : 'xxxl'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : `${(100 * 62) / screenWidth}vmax`}
          letterSpacing={'-0.02em'}
        >
          {'See how our fees stack up against the competition.'}
        </TextWrapper>
      </FlexRow>

      <FutureTable tradeAmount={convertCurrency2Number(val)} />
      <AmountInputWrapper
        width={'159px'}
        height={'40px'}
        color={'text4'}
        fontSize={'16px'}
        fontWeight={500}
        backgroundColor={themeColor.text6}
        border={'none'}
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
