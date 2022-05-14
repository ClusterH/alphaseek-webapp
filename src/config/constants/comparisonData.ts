import BINANCE_LOGO from 'assets/images/binance_logo.png'
import BYBIT_LOGO from 'assets/images/bybit_logo.png'
import CRYPTO_LOGO from 'assets/images/crypto_logo.png'
import FTX_LOGO from 'assets/images/ftx_logo.png'
import ALPHASEEK_LOGO from 'assets/images/main_logo_white_transparent.png'
import UNISWAP_LOGO from 'assets/images/uniswap_logo.png'
import { IComparisonData, TComparison } from 'views/Home/types'

export const LOGO_LIST: { [key in TComparison]: string } = {
  alphaseek: ALPHASEEK_LOGO,
  binance: BINANCE_LOGO,
  ftx: FTX_LOGO,
  bybit: BYBIT_LOGO,
  crypto: CRYPTO_LOGO,
  uniswap: UNISWAP_LOGO,
}

//included min value to current range: min <= amount < max
export const SPOT_SAVING_DATA: { [key in TComparison]: IComparisonData[] } = {
  alphaseek: [
    { min: 0, max: 500000, maker: -0.01, taker: 0.05 },
    { min: 500001, max: 5000001, maker: -0.01, taker: 0.045 },
    { min: 5000001, max: 10000001, maker: -0.02, taker: 0.04 },
    { min: 10000001, max: 25000001, maker: -0.02, taker: 0.035 },
    { min: 25000001, max: 50000001, maker: -0.03, taker: 0.03 }, // max cant larger than slider max value
    // { min: 50000001, max: undefined, maker: -0.03, taker: 0.025 },
  ],
  binance: [
    { min: 0, max: 1000000, maker: 0.1, taker: 0.1 },
    { min: 1000000, max: 5000000, maker: 0.09, taker: 0.1 },
    { min: 5000000, max: 20000000, maker: 0.08, taker: 0.1 },
    { min: 20000000, max: 50000001, maker: 0.07, taker: 0.1 },
    // { min: 120000000, max: 200000000, maker: 0.07, taker: 0.09 }, // disable these data since slider max
    // { min: 200000000, max: 500000000, maker: 0.06, taker: 0.08 },
    // { min: 500000000, max: 1000000000, maker: 0.05, taker: 0.07 },
    // { min: 1000000000, max: 2500000000, maker: 0.04, taker: 0.06 },
    // { min: 2500000000, max: 5000000000, maker: 0.03, taker: 0.05 },
    // { min: 5000000000, max: undefined, maker: 0.02, taker: 0.04 },
  ],
  ftx: [
    { min: 0, max: 2000000, maker: 0.02, taker: 0.07 },
    { min: 2000000, max: 5000001, maker: 0.015, taker: 0.06 },
    { min: 5000001, max: 10000001, maker: 0.01, taker: 0.055 },
    { min: 10000001, max: 25000001, maker: 0.005, taker: 0.05 },
    { min: 25000001, max: 50000001, maker: 0, taker: 0.045 },
    // { min: 50000000, max: undefined, maker: 0, taker: 0.04 },
  ],
  bybit: [
    { min: 0, max: 250000, maker: 0.1, taker: 0.1 },
    { min: 250000, max: 500000, maker: 0.04, taker: 0.06 },
    { min: 500000, max: 1000000, maker: 0.02, taker: 0.05 },
    { min: 1000000, max: 50000001, maker: 0.01, taker: 0.04 },
  ],
  crypto: [
    { min: 0, max: 25000, maker: 0.4, taker: 0.4 },
    { min: 25000, max: 50001, maker: 0.35, taker: 0.35 },
    { min: 50001, max: 100001, maker: 0.15, taker: 0.25 },
    { min: 100001, max: 250001, maker: 0.1, taker: 0.16 },
    { min: 250001, max: 1000001, maker: 0.09, taker: 0.15 },
    { min: 1000001, max: 20000001, maker: 0.08, taker: 0.14 },
    { min: 20000001, max: 50000001, maker: 0.07, taker: 0.13 },
    // { min: 100000000, max: 500000000, maker: 0.06, taker: 0.12 },
    // { min: 200000000, max: undefined, maker: 0.04, taker: 0.1 },
  ],
  uniswap: [],
}

export const FUTURE_SAVING_DATA: { [key in TComparison]: IComparisonData[] } = {
  alphaseek: [
    { min: 0, max: 500000, maker: -0.01, taker: 0.25 },
    { min: 500001, max: 5000001, maker: -0.01, taker: 0.0225 },
    { min: 5000001, max: 10000001, maker: -0.02, taker: 0.02 },
    { min: 10000001, max: 25000001, maker: -0.02, taker: 0.0175 },
    { min: 25000001, max: 50000001, maker: -0.03, taker: 0.015 },
  ],
  binance: [
    { min: 0, max: 15000000, maker: 0.02, taker: 0.04 },
    { min: 15000000, max: 50000001, maker: 0.016, taker: 0.04 },
  ],
  ftx: [
    { min: 0, max: 2000000, maker: 0.02, taker: 0.07 },
    { min: 2000000, max: 5000001, maker: 0.015, taker: 0.06 },
    { min: 5000001, max: 10000001, maker: 0.01, taker: 0.055 },
    { min: 10000001, max: 25000001, maker: 0.005, taker: 0.05 },
    { min: 25000001, max: 50000001, maker: 0, taker: 0.045 },
  ],
  bybit: [
    { min: 0, max: 250000, maker: 0.01, taker: 0.06 },
    { min: 250000, max: 500001, maker: 0.05, taker: 0.06 },
    { min: 500001, max: 1000001, maker: 0.04, taker: 0.045 },
    { min: 1000001, max: 50000001, maker: 0.02, taker: 0.0425 },
  ],
  crypto: [],
  uniswap: [],
}

export const SWAP_SAVING_DATA: { [key in TComparison]: number | undefined } = {
  alphaseek: 0,
  binance: 0.2,
  ftx: 0.35,
  bybit: undefined,
  crypto: undefined,
  uniswap: 0.3,
}

// coinbase: [
//   { min: 0, max: 10000, maker: 0.4, taker: 0.6 },
//   { min: 10000, max: 50000, maker: 0.25, taker: 0.4 },
//   { min: 50000, max: 100000, maker: 0.15, taker: 0.25 },
//   { min: 100000, max: 1000000, maker: 0.1, taker: 0.2 },
//   { min: 1000000, max: 20000000, maker: 0.08, taker: 0.18 },
//   { min: 20000000, max: 100000000, maker: 0.05, taker: 0.15 },
//   { min: 100000000, max: 300000000, maker: 0.02, taker: 0.1 },
//   { min: 300000000, max: 500000000, maker: 0, taker: 0.08 },
//   { min: 500000000, max: undefined, maker: 0, taker: 0.05 },
// ],

// bitmart: [
//   { min: 0, max: 2500, maker: 0.25, taker: 0.25 },
//   { min: 2500, max: 10000, maker: 0.2, taker: 0.2 },
//   { min: 10000, max: 25000, maker: 0.18, taker: 0.2 },
//   { min: 25000, max: 50000, maker: 0.16, taker: 0.18 },
//   { min: 50000, max: 100000, maker: 0.14, taker: 0.16 },
//   { min: 100000, max: 200000, maker: 0.12, taker: 0.14 },
//   { min: 200000, max: 500000, maker: 0.1, taker: 0.12 },
//   { min: 500000, max: 1000000, maker: 0.08, taker: 0.1 },
//   { min: 1000000, max: undefined, maker: 0.06, taker: 0.08 },
// ],
