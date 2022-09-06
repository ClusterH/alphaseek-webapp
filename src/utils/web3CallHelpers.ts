import { JsonRpcProvider, StaticJsonRpcProvider } from '@ethersproject/providers'
import { BigNumber, Contract, ethers } from 'ethers'

import { getBalanceNumber } from './bigNumberHelper'

export const getGasPrice = async (provider: StaticJsonRpcProvider) => {
  const gasPrice = await provider.getGasPrice()
  return ethers.utils.formatUnits(gasPrice, 'gwei')
}

export const getEthBalanace = async (provider: JsonRpcProvider, account: string) => {
  const balance = await provider.getBalance(account)
  return getBalanceNumber(balance)
}

export const getNFTBalance = async (contract: Contract, account: string) => {
  const balance = await contract.balanceOf(account)
  return balance.toString()
}

export const getTotalSupply = async (contract: Contract) => {
  return (await contract.totalSupply()).toNumber()
}

export const getTokenSupply = async (contract: Contract) => {
  return (await contract.TOKEN_SUPPLY()).toNumber()
}

export const getLimitedEditionTokens = async (contract: Contract) => {
  return (await contract.LIMITED_EDITION_TOKENS()).toNumber()
}

export const checkMintPhaseStatus = async (foundersPassContract: Contract) => {
  return await foundersPassContract.phase()
}

export const getMintPrice = async (foundersPassContract: Contract) => {
  return await foundersPassContract.currentMintPrice()
}

export const getWalletLimit = async (foundersPassContract: Contract, address: string) => {
  const limit = await foundersPassContract.getWalletLimit(address)
  return limit.toNumber()
}

export const getWalletCount = async (foundersPassContract: Contract, address: string) => {
  const count = await foundersPassContract.getWalletCount(address)
  return count.toNumber()
}

export const executeMint = async (
  foundersPassContract: Contract,
  to: string,
  amount: number,
  nonce: string,
  signature: string,
  merkleProof: string[],
  value: BigNumber,
  gasLimit: BigNumber
) => {
  const txHash = await foundersPassContract.mint(to, amount, nonce, signature, merkleProof, { value, gasLimit })
  const receipt = await txHash.wait()
  return { status: receipt.status, txHash: receipt.transactionHash }
}
