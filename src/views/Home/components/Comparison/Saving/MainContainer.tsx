import React, { useCallback, useState } from 'react'

import { FlexColumn, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'
import { usePeriodSelect } from 'views/Home/hooks'

import { TRADE_AMOUNT_MIN } from '../utils'

import SavingTable from './SavingTable'
import SliderContainer from './SliderContainer'

const SavingComparison: React.FC = () => {
  const { period, handlePeriod } = usePeriodSelect()
  const [tradeAmount, setTradeAmount] = useState<number>(TRADE_AMOUNT_MIN)

  const handleTradeAmount = useCallback((amount: number) => {
    setTradeAmount(amount)
  }, [])

  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '6% 18%'} gap={isMobile ? '12px' : '0px'}>
      <TextWrapper color={'text2'} fontWeight={'bold'} lineHeight={62} letterSpacing={'0.1em'}>
        {'COMPARISON'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 62} letterSpacing={'-0.02em'}>
        {'How much you could be saving with the'}
      </TextWrapper>
      <TextWrapper fontWeight={'bold'} fontSize={'xxxl'} lineHeight={isMobile ? 64 : 62} letterSpacing={'-0.02em'}>
        {'Alphaseek Founder’s pass.'}
      </TextWrapper>
      <SliderContainer period={period} handlePeriod={handlePeriod} handleTradeAmount={handleTradeAmount} />
      <SavingTable period={period} tradeAmount={tradeAmount} />
    </FlexColumn>
  )
}

export default SavingComparison
