import React, { useMemo, useState } from 'react'

import BINANCE_LOGO from 'assets/images/binance_logo.png'
import BYBIT_LOGO from 'assets/images/bybit_logo.png'
import CRYPTO_LOGO from 'assets/images/crypto_logo.png'
import FTX_LOGO from 'assets/images/ftx_logo.png'
import UNISWAP_LOGO from 'assets/images/uniswap_logo.png'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { TPeriod } from 'views/Home/types'

import { calcSpotSavings } from './utils'

const SavingTable: React.FC<{ period: TPeriod; tradeAmount: number }> = ({ period, tradeAmount }) => {
  const spotSaving = useMemo(() => calcSpotSavings(tradeAmount), [tradeAmount])
  const per = useMemo(() => (period === 'Monthly' ? 1 : 12), [period])

  return (
    <FlexColumn alignItems={'flex-start'}>
      <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'medium'} fontSize={'xl'} letterSpacing={'-0.02em'}>
        {`${period} savings versus...`}
      </TextWrapper>
      <FlexRow justifyContent={'space-between'}>
        <FlexColumn colWidth={'10%'}></FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <ImageContainer src={BINANCE_LOGO} />
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <ImageContainer src={FTX_LOGO} />
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <ImageContainer src={BYBIT_LOGO} />
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <ImageContainer src={CRYPTO_LOGO} />
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <ImageContainer src={UNISWAP_LOGO} />
        </FlexColumn>
      </FlexRow>
      <FlexRow justifyContent={'space-between'}>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{'Spot Fees'}</TextWrapper>
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{(spotSaving.binance * per).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TextWrapper>
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{(spotSaving.ftx * per).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TextWrapper>
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{(spotSaving.bybit * per).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TextWrapper>
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{(spotSaving.crypto * per).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TextWrapper>
        </FlexColumn>
        <FlexColumn colWidth={'10%'} alignItems={'flex-start'}>
          <TextWrapper>{'--'}</TextWrapper>
        </FlexColumn>
      </FlexRow>
    </FlexColumn>
  )
}

export default SavingTable
