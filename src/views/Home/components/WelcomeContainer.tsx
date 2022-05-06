import React from 'react'

import { isMobile, isTablet } from 'react-device-detect'

import { FlexColumn } from 'styles/components'

const WelcomeContainer: React.FC = () => {
  return <FlexColumn colHeight={isMobile || isTablet ? 'auto' : 'calc(100vh - 120px)'} padding={'6% 0 6% 6%'}></FlexColumn>
}

export default WelcomeContainer
