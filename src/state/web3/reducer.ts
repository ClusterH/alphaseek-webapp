import { createSlice } from '@reduxjs/toolkit'

interface IState {
  gasPrice: string
  walletBalance: { ethBalance: string }
  supplyAmounts: { totalSupply: number; tokenSupply: number; limitedEditionTokens: number }
}

export const initialState: IState = {
  gasPrice: '',
  walletBalance: { ethBalance: '0.00' },
  supplyAmounts: { totalSupply: 0, tokenSupply: 0, limitedEditionTokens: 300 },
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setGasPrice(state, action) {
      if (action.payload) state.gasPrice = action.payload
    },
    setWalletBalance(state, action) {
      if (action.payload) state.walletBalance = { ...action.payload }
    },
    setSupplyAmounts(state, action) {
      if (action.payload) state.supplyAmounts = { ...action.payload }
    },
  },
})

export const { setGasPrice, setWalletBalance, setSupplyAmounts } = web3Slice.actions
export default web3Slice.reducer
