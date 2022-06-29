import { useCallback, useLayoutEffect } from 'react'

import { UAParser } from 'ua-parser-js'

import { useAppDispatch } from 'state/hooks'
import { setScreenSize } from 'state/screenSize/reducer'

const parser = new UAParser(window.navigator.userAgent)
const { type } = parser.getDevice()

export const useResize = () => {
  const dispatch = useAppDispatch()
  const handleResize = useCallback(() => {
    dispatch(
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        isLargeScreen: window.innerWidth >= 1440,
        isMobile: type === 'mobile' || type === 'tablet' || window.innerWidth <= 900,
      })
    )
  }, [dispatch])

  useLayoutEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
}
