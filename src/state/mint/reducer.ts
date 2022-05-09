import { createSlice } from '@reduxjs/toolkit'

import { MintPhaseStatus } from 'views/Home/types'

interface IState {
  mintPhase: MintPhaseStatus
}

export const initialState: IState = {
  mintPhase: 0,
}

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {
    setMintPhase(state, action) {
      if (action.payload) state.mintPhase = action.payload
    },
  },
})

export const { setMintPhase } = mintSlice.actions
export default mintSlice.reducer
