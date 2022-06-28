import React, { useCallback, useState } from 'react'

import { FlexColumn, FlexRow, TextWrapper } from 'styles/components'
import { isLargeScreen, isMobile } from 'utils'
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
    <FlexColumn
      alignItems={'flex-start'}
      padding={isMobile ? '113px 30px 0' : isLargeScreen ? '234px 178px 0' : '16.25% 12.3611111vw 0'}
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
      <FlexRow gap={'0px'} rowWidth={isMobile ? '100%' : isLargeScreen ? '917px' : '63.68%'}>
        <TextWrapper
          fontSize={isMobile ? 32 : 'xxxl'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '38px' : isLargeScreen ? '62px' : 62}
          letterSpacing={'-0.02em'}
        >
          {'How much you could be saving with the Alphaseek Founder’s pass.'}
        </TextWrapper>
      </FlexRow>
      <SliderContainer period={period} handlePeriod={handlePeriod} handleTradeAmount={handleTradeAmount} />
      <SavingTable period={period} tradeAmount={tradeAmount} />
    </FlexColumn>
  )
}

export default SavingComparison
