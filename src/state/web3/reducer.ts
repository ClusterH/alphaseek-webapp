import { createSlice } from '@reduxjs/toolkit'

interface IState {
  gasPrice: string
  walletBalance: { ethBalance: string }
}

export const initialState: IState = {
  gasPrice: '',
  walletBalance: { ethBalance: '0.00' },
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
  },
})

export const { setGasPrice, setWalletBalance } = web3Slice.actions
export default web3Slice.reducer
