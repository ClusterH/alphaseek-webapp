import { createSlice } from '@reduxjs/toolkit'
import { UAParser } from 'ua-parser-js'

const parser = new UAParser(window.navigator.userAgent)
const { type } = parser.getDevice()

interface IState {
  screenSize: { screenWidth: number; screenHeight: number; isLargeScreen: boolean; isMobile: boolean }
}

export const initialState: IState = {
  screenSize: {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    isLargeScreen: window.innerWidth >= 1440,
    isMobile: type === 'mobile' || type === 'tablet' || window.innerWidth <= 900,
  },
}

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setScreenSize(state, action) {
      state.screenSize = { ...action.payload }
    },
  },
})

export const { setScreenSize } = screenSizeSlice.actions
export default screenSizeSlice.reducer
