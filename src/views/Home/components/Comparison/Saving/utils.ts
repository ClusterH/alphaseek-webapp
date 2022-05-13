import { SPOT_SAVING_DATA } from 'config/constants'
import { IComparisonData, TPeriod } from 'views/Home/types'

export const TRADE_AMOUNT_MIN = 10000
export const TRADE_AMOUNT_MAX = 2500000000
export const TRADE_AMOUNT_STEP = 100

const getDataIncludedInRange = (amount: number, dataList: IComparisonData[]) => {
  return dataList.filter((item) => (item.max ? amount >= item.min && amount < item.max : amount >= item.min))
}

const calcFeeAmount = (amount: number, makerFee: number, takerFee: number) => {
  return ((makerFee + takerFee) * amount) / 100
}

export const calcSpotSavings = (tradeAmount: number) => {
  const alphaSeekSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.alphaseek)[0]
  const binanceSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.binance)[0]
  const ftxSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.ftx)[0]
  const bybitSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.bybit)[0]
  const cryptoSpot = getDataIncludedInRange(tradeAmount, SPOT_SAVING_DATA.crypto)[0]

  const alphaSeekFee = calcFeeAmount(tradeAmount, alphaSeekSpot.maker, alphaSeekSpot.taker)
  const binanceFee = calcFeeAmount(tradeAmount, binanceSpot.maker, binanceSpot.taker)
  const ftxFee = calcFeeAmount(tradeAmount, ftxSpot.maker, ftxSpot.taker)
  const bybitFee = calcFeeAmount(tradeAmount, bybitSpot.maker, bybitSpot.taker)
  const cryptoFee = calcFeeAmount(tradeAmount, cryptoSpot.maker, cryptoSpot.taker)

  return {
    binance: binanceFee - alphaSeekFee,
    ftx: ftxFee - alphaSeekFee,
    bybit: bybitFee - alphaSeekFee,
    crypto: cryptoFee - alphaSeekFee,
    uniswap: undefined,
  }
}
