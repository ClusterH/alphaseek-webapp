import { FUTURE_SAVING_DATA, SPOT_SAVING_DATA, SWAP_SAVING_DATA } from 'config/constants'
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
  // const alphaSeekSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.alphaseek)[0]
  // const binanceSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.binance)[0]
  // const ftxSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.ftx)[0]
  // const bybitSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.bybit)[0]
  // const cryptoSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.crypto)[0]

  const alphaSeekFee = calcFeeForEveryComparison(tradeAmount, 'alphaseek')
  const binanceFee = calcFeeForEveryComparison(tradeAmount, 'binance')
  const ftxFee = calcFeeForEveryComparison(tradeAmount, 'ftx')
  const bybitFee = calcFeeForEveryComparison(tradeAmount, 'bybit')
  const cryptoFee = calcFeeForEveryComparison(tradeAmount, 'crypto')
  const uniswapFee = calcFeeForEveryComparison(tradeAmount, 'uniswap')

  // const alphaSeekFee = calcFeeAmount(tradeAmount, alphaSeekSpot.maker, alphaSeekSpot.taker)
  // const binanceFee = calcFeeAmount(tradeAmount, binanceSpot.maker, binanceSpot.taker)
  // const ftxFee = calcFeeAmount(tradeAmount, ftxSpot.maker, ftxSpot.taker)
  // const bybitFee = calcFeeAmount(tradeAmount, bybitSpot.maker, bybitSpot.taker)
  // const cryptoFee = calcFeeAmount(tradeAmount, cryptoSpot.maker, cryptoSpot.taker)

  // return {
  //   binance: binanceFee - alphaSeekFee,
  //   ftx: ftxFee - alphaSeekFee,
  //   bybit: bybitFee - alphaSeekFee,
  //   crypto: cryptoFee - alphaSeekFee,
  //   uniswap: undefined,
  // }

  return { alphaseek: alphaSeekFee, binance: binanceFee, ftx: ftxFee, bybit: bybitFee, crypto: cryptoFee, uniswap: uniswapFee }
}
