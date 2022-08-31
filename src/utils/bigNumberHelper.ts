import { formatUnits, parseUnits } from '@ethersproject/units'
import { BigNumber } from 'ethers'

export const getBalanceNumber = (balance: BigNumber, decimals = 18, displayDecimals = 2) => {
  const formattedString = formatUnits(balance, decimals)
  return (+formattedString).toFixed(displayDecimals)
}

export const convertToBigNumber = (val: string, decimals = 18) => {
  return parseUnits(val, decimals)
}

export const caluMultipleForBigNumber = (bigNum1: BigNumber, bigNum2: BigNumber, decimals = 18) => {
  const mul = bigNum1.mul(bigNum2)
  return formatUnits(mul, decimals)
}
