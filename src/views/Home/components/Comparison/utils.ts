import { FEE_DATA, FUTURE_SAVING_DATA, LOGO_LIST_FEE, SPOT_SAVING_DATA, SWAP_SAVING_DATA } from 'config/constants'
import { IComparisonData, TComparison, TFeeTypes, TPeriod } from 'views/Home/types'

export const TRADE_AMOUNT_MIN = 100000
export const TRADE_AMOUNT_MAX = 50000000
export const TRADE_AMOUNT_STEP = 100

const getDataIncludedInRange = (amount: number, dataList: IComparisonData[]) => {
  if (dataList.length === 0) return undefined
  return dataList.filter((item) => (item.max ? amount >= item.min && amount < item.max : amount >= item.min))
}

const calcFeeAmount = (amount: number, makerFee: number, takerFee: number) => {
  return ((makerFee + takerFee) * amount) / 100
}

const calcFeeForEveryComparison = (amount: number, comparison: TComparison) => {
  const spotData = getDataIncludedInRange(amount, SPOT_SAVING_DATA[comparison])
  const futureData = getDataIncludedInRange(amount, FUTURE_SAVING_DATA[comparison])

  const comparisonData = {
    spot: spotData ? spotData[0] : undefined,
    future: futureData ? futureData[0] : undefined,
    swap: SWAP_SAVING_DATA[comparison],
  }

  const calcedFee = {
    spot: comparisonData.spot ? calcFeeAmount(amount, comparisonData.spot.maker, comparisonData.spot.taker) : undefined,
    future: comparisonData.future ? calcFeeAmount(amount, comparisonData.future.maker, comparisonData.future.taker) : undefined,
    swap: comparisonData.swap ? calcFeeAmount(amount, comparisonData.swap, 0) : undefined,
  }

  return calcedFee
}

export const calcSpotSavings = (tradeAmount: number): { [key in TComparison]: { [key in TFeeTypes]: number | undefined } } => {
  const alphaseek = calcFeeForEveryComparison(tradeAmount, 'alphaseek')
  const binance = calcFeeForEveryComparison(tradeAmount, 'binance')
  const ftx = calcFeeForEveryComparison(tradeAmount, 'ftx')
  const bybit = calcFeeForEveryComparison(tradeAmount, 'bybit')
  const crypto = calcFeeForEveryComparison(tradeAmount, 'crypto')
  const uniswap = calcFeeForEveryComparison(tradeAmount, 'uniswap')

  return { alphaseek, binance, ftx, bybit, crypto, uniswap }
}

const calcFuturesFeeForEveryComparison = (amount: number, comparison: keyof typeof LOGO_LIST_FEE) => {
  const maker = FEE_DATA[comparison].maker
  const taker = FEE_DATA[comparison].taker
  const feeAmount = (amount * (maker + taker)) / 100

  return { maker, taker, feeAmount }
}

export const calcFuturesFee = (tradeAmount: number) => {
  const alphaseek = calcFuturesFeeForEveryComparison(tradeAmount, 'alphaseek')
  const binance = calcFuturesFeeForEveryComparison(tradeAmount, 'binance')
  const ftx = calcFuturesFeeForEveryComparison(tradeAmount, 'ftx')
  const bybit = calcFuturesFeeForEveryComparison(tradeAmount, 'bybit')

  return { none: undefined, alphaseek, binance, ftx, bybit }
}
