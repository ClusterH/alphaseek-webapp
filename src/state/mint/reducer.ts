import { createSlice } from '@reduxjs/toolkit'

import { MintPhaseStatus } from 'views/Home/types'

interface IState {
  mintPhase: MintPhaseStatus
  mintCount: number
  mintWallet: { option: 'connected' | 'cold'; wallet: string }
  mintPrice: string
}

export const initialState: IState = {
  mintPhase: 0,
  mintCount: 1,
  mintWallet: { option: 'connected', wallet: '' },
  mintPrice: '0',
}

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {
    setMintPhase(state, action) {
      if (action.payload) state.mintPhase = action.payload
    },
    setMintCount(state, action) {
      state.mintCount = action.payload
    },
    setMintWallet(state, action) {
      state.mintWallet = { ...state.mintWallet, ...action.payload }
    },
    setMintPrice(state, action) {
      state.mintPrice = action.payload
    },
  },
})

export const { setMintPhase, setMintCount, setMintWallet, setMintPrice } = mintSlice.actions
export default mintSlice.reducer
