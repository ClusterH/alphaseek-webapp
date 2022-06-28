import React, { useEffect, useState } from 'react'

import RangeInput from 'components/RangeInput'
import { FlexColumn, FlexRow, MainButton, TextWrapper, TransparentButton } from 'styles/components'
import { isLargeScreen, isMobile } from 'utils'
import { TPeriod } from 'views/Home/types'

import { TRADE_AMOUNT_MAX, TRADE_AMOUNT_MIN, TRADE_AMOUNT_STEP } from '../utils'

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
    <FlexColumn padding={isMobile ? '23px 0 33.74px' : isLargeScreen ? '104px 184px' : '7.22% 12.778%'}>
      <FlexRow margin={isMobile ? '0 0 7.96px 0' : '0 0 20px 0'}>
        <TextWrapper
          fontWeight={'bold'}
          fontSize={isMobile ? 14 : 'xl'}
          lineHeight={isMobile ? '17px' : isLargeScreen ? '29px' : 29}
          letterSpacing={'-0.02em'}
        >
          {'If you traded'}
        </TextWrapper>
        <TextWrapper
          fontWeight={'bold'}
          fontSize={isMobile ? 14 : 'xl'}
          lineHeight={isMobile ? '17px' : isLargeScreen ? '29px' : 29}
          letterSpacing={'-0.02em'}
        >{`${Number(val).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          maximumFractionDigits: 0,
        })}`}</TextWrapper>
      </FlexRow>

      <RangeInput onChange={setVal} defaultValue={val} min={TRADE_AMOUNT_MIN} max={TRADE_AMOUNT_MAX} step={TRADE_AMOUNT_STEP} />

      <FlexRow margin={isMobile ? '4.07px 0 0' : '8px 0 0'}>
        <TextWrapper
          color={'text6'}
          fontWeight={'bold'}
          fontSize={isMobile ? 14 : isLargeScreen ? 12 : 'xs'}
          lineHeight={isMobile ? '17px' : isLargeScreen ? '14px' : 14}
          letterSpacing={'-0.02em'}
        >
          {TRADE_AMOUNT_MIN.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
        </TextWrapper>
        <TextWrapper color={'text6'} fontWeight={'bold'} fontSize={isMobile ? 'base' : 'xs'} lineHeight={14} letterSpacing={'-0.02em'}>
          {TRADE_AMOUNT_MAX.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
        </TextWrapper>
      </FlexRow>
      <FlexRow
        justifyContent={isMobile ? 'center' : 'flex-start'}
        gap={isMobile ? '22.34px' : '24px'}
        margin={isMobile ? '23.16px' : '34px 0'}
      >
        {period === 'Monthly' ? (
          <MainButton width={isMobile ? '50%' : isLargeScreen ? '183px' : '12.7%'} height={isMobile ? '50.26px' : '54px'}>
            {'Monthly'}
          </MainButton>
        ) : (
          <TransparentButton
            width={isMobile ? '50%' : isLargeScreen ? '183px' : '12.7%'}
            height={isMobile ? '48.26px' : '52px'}
            onClick={() => handlePeriod('Monthly')}
          >
            {'Monthly'}
          </TransparentButton>
        )}
        {period === 'Annual' ? (
          <MainButton width={isMobile ? '50%' : isLargeScreen ? '183px' : '12.7%'} height={isMobile ? '50.26px' : '54px'}>
            {'Annual'}
          </MainButton>
        ) : (
          <TransparentButton
            width={isMobile ? '50%' : isLargeScreen ? '183px' : '12.7%'}
            height={isMobile ? '48.26px' : '52px'}
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
