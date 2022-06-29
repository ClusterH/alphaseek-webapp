import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useScreenSize = () => {
  const { screenWidth, screenHeight, isLargeScreen, isMobile } = useAppSelector((state: AppState) => state.screenSizeReducer.screenSize)

  // return { screenWidth: screenWidth || window.innerWidth, screenHeight: screenHeight || window.innerHeight }
  return { screenWidth, screenHeight, isLargeScreen, isMobile }
}
