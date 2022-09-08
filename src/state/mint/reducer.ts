import { createSlice } from '@reduxjs/toolkit'
import { BigNumber, ethers } from 'ethers'

import { MintPanelStatus, MintPhaseStatus } from 'views/Home/types'

interface IState {
  mintPhase: MintPhaseStatus
  mintCount: number
  mintWallet: { option: 'connected' | 'cold'; wallet: string }
  mintPrice: BigNumber
  panelStatus: MintPanelStatus
}

export const initialState: IState = {
  mintPhase: 0,
  mintCount: 1,
  mintWallet: { option: 'connected', wallet: '' },
  mintPrice: ethers.constants.Zero,
  panelStatus: 0,
}

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {
    setMintPhase(state, action) {
      state.mintPhase = action.payload
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
    setPanelStatus(state, action) {
      state.panelStatus = action.payload
    },
  },
})

export const { setMintPhase, setMintCount, setMintWallet, setMintPrice, setPanelStatus } = mintSlice.actions
export default mintSlice.reducer
