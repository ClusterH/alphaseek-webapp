import React, { useCallback, useState } from 'react'

import { FlexColumn, TextWrapper } from 'styles/components'
import { usePeriodSelect } from 'views/Home/hooks'

import SavingTable from './SavingTable'
import SliderContainer from './SliderContainer'
import { TRADE_AMOUNT_MIN } from './utils'

const SavingComparison: React.FC = () => {
  const { period, handlePeriod } = usePeriodSelect()
  const [tradeAmount, setTradeAmount] = useState<number>(TRADE_AMOUNT_MIN)

  const handleTradeAmount = useCallback((amount: number) => {
    setTradeAmount(amount)
  }, [])

  return (
    <FlexColumn alignItems={'flex-start'} padding={'6%'} gap={'0px'}>
      <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} lineHeight={42} letterSpacing={'0.1em'}>
        {'COMPARISON'}
      </TextWrapper>
      <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xxxl'} lineHeight={42} letterSpacing={'-0.02em'}>
        {'How much you could be saving with the'}
      </TextWrapper>
      <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xxxl'} lineHeight={42} letterSpacing={'-0.02em'}>
        {'Alphaseek Founder’s pass.'}
      </TextWrapper>
      <SliderContainer period={period} handlePeriod={handlePeriod} handleTradeAmount={handleTradeAmount} />
      <SavingTable period={period} tradeAmount={tradeAmount} />
    </FlexColumn>
  )
}

export default SavingComparison
