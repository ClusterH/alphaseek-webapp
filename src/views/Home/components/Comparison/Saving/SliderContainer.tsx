import React, { useEffect, useState } from 'react'

import RangeInput from 'components/RangeInput'
import { FlexColumn, FlexRow, MainButton, TextWrapper, TransparentButton } from 'styles/components'
import { isMobile } from 'utils'
import { TPeriod } from 'views/Home/types'

import { TRADE_AMOUNT_MIN, TRADE_AMOUNT_MAX, TRADE_AMOUNT_STEP } from './utils'

const SliderContainer: React.FC<{
  period: TPeriod
  handlePeriod: (period: TPeriod) => void
  handleTradeAmount: (amount: number) => void
}> = ({ period, handlePeriod, handleTradeAmount }) => {
  const [val, setVal] = useState<number>(TRADE_AMOUNT_MIN)

  useEffect(() => {
    handleTradeAmount(Number(val))
  }, [handleTradeAmount, val])

  return (
    <FlexColumn padding={isMobile ? '6% 0' : '6% 12%'}>
      <FlexRow margin={'0 0 20px 0'}>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xl'} letterSpacing={'-0.02em'}>
          {'If you traded'}
        </TextWrapper>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xl'} letterSpacing={'-0.02em'}>{`${Number(val).toLocaleString(
          'en-US',
          { style: 'currency', currency: 'USD' }
        )}`}</TextWrapper>
      </FlexRow>

      <RangeInput onChange={setVal} defaultValue={val} min={TRADE_AMOUNT_MIN} max={TRADE_AMOUNT_MAX} step={TRADE_AMOUNT_STEP} />

      <FlexRow margin={'16px 0 0'}>
        <TextWrapper
          color={'text6'}
          fontFamily={'title'}
          fontWeight={'bold'}
          fontSize={isMobile ? 'base' : 'xs'}
          lineHeight={14}
          letterSpacing={'-0.02em'}
        >
          {TRADE_AMOUNT_MIN.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </TextWrapper>
        <TextWrapper
          color={'text6'}
          fontFamily={'title'}
          fontWeight={'bold'}
          fontSize={isMobile ? 'base' : 'xs'}
          lineHeight={14}
          letterSpacing={'-0.02em'}
        >
          {TRADE_AMOUNT_MAX.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={isMobile ? 'center' : 'flex-start'} gap={'24px'} margin={'22px 0'}>
        {period === 'Monthly' ? (
          <MainButton width={isMobile ? '44%' : 'auto'} height={'auto'} padding={isMobile ? '8px 34px' : '14px 60px'}>
            {'Monthly'}
          </MainButton>
        ) : (
          <TransparentButton
            width={isMobile ? '44%' : 'auto'}
            height={'auto'}
            padding={isMobile ? '8px 34px' : '14px 60px'}
            onClick={() => handlePeriod('Monthly')}
          >
            {'Monthly'}
          </TransparentButton>
        )}
        {period === 'Annual' ? (
          <MainButton width={isMobile ? '44%' : 'auto'} height={'auto'} padding={isMobile ? '8px 34px' : '14px 60px'}>
            {'Annual'}
          </MainButton>
        ) : (
          <TransparentButton
            width={isMobile ? '44%' : 'auto'}
            height={'auto'}
            padding={isMobile ? '8px 34px' : '14px 60px'}
            onClick={() => handlePeriod('Annual')}
          >
            {'Annual'}
          </TransparentButton>
        )}
      </FlexRow>
    </FlexColumn>
  )
}

export default SliderContainer
