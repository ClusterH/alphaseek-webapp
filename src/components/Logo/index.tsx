import React from 'react'

import styled from 'styled-components'

import LOGO from 'assets/images/main_logo.png'
import { useAppNavigate } from 'hooks'
import { ImageContainer } from 'styles/components'
import { isMobile } from 'utils'

const LogoWrapper = styled(ImageContainer)`
  z-index: 1;
  cursor: pointer;
`
const Logo: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  return (
    <LogoWrapper
      src={LOGO}
      borderRadius={'0'}
      height={isMobile ? '62px' : '80px'}
      width={'auto'}
      alt="AlphaSeek Logo"
      onClick={() => {
        handleNavigate('/')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    />
  )
}

export default Logo
