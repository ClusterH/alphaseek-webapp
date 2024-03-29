import { UAParser } from 'ua-parser-js'

const parser = new UAParser(window.navigator.userAgent)
const { type } = parser.getDevice()

export const userAgent = parser.getResult()

export const isMobile = type === 'mobile' || type === 'tablet'

export const screenWidth = window.innerWidth
// export const screenHeight = window.screen.height
// // export const isLargeScreen = window.screen.width >= 1440
// export const isLargeScreen = window.innerWidth >= 1440
