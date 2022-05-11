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
  const totalSupply = await contract.totalSupply()
  return totalSupply
}

export const checkMintPhaseStatus = async (minterContract: Contract) => {
  return await minterContract.phase()
}

export const getMintPrice = async (minterContract: Contract) => {
  const price = await minterContract.mintPrice()
  return ethers.utils.formatEther(price)
}

export const executeMint = async (minterContract: Contract, to: string, nonce: string, signature: string, merkleProof: string[]) => {
  const txHash = await minterContract.mint(to, nonce, signature, merkleProof, { value: '100000000000000' })
  const receipt = await txHash.wait()
  return receipt.status
}
