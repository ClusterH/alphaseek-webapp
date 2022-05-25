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
  return (await contract.MINTABLE_TOKENS()).toNumber()
}

export const checkMintPhaseStatus = async (minterContract: Contract) => {
  return await minterContract.phase()
}

export const getMintPrice = async (minterContract: Contract) => {
  return await minterContract.mintPrice()
}

export const getWalletLimit = async (minterContract: Contract, address: string) => {
  const limit = await minterContract.getWalletLimit(address)
  return limit.toNumber()
}

export const getWalletCount = async (minterContract: Contract, address: string) => {
  const count = await minterContract.getWalletCount(address)
  return count.toNumber()
}

export const executeMint = async (
  minterContract: Contract,
  to: string,
  nonce: string,
  signature: string,
  merkleProof: string[],
  value: BigNumber,
  gasLimit: BigNumber
) => {
  const txHash = await minterContract.mint(to, nonce, signature, merkleProof, { value, gasLimit })
  const receipt = await txHash.wait()
  return { status: receipt.status, txHash: receipt.transactionHash }
}
