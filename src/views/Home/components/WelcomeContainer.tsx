import React from 'react'

import { FlexColumn } from 'styles/components'
import { isMobile } from 'utils'

const WelcomeContainer: React.FC = () => {
  return <FlexColumn colHeight={isMobile ? 'auto' : 'calc(100vh - 120px)'} padding={'6% 0 6% 6%'}></FlexColumn>
}

export default WelcomeContainer
