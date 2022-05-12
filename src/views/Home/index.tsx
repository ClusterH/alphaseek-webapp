import React from 'react'

import { PageWrapper } from 'styles/components'

import {
  AboutContainer,
  ScrollTopBtn,
  TeamContainer,
  UtilityContainer,
  WelcomeContainer,
  WhatIsAlphaseekContainer,
  WhyChooseAlphaSeekContainer,
} from './components'

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <WelcomeContainer />
      <AboutContainer />
      <UtilityContainer />
      <WhatIsAlphaseekContainer />
      <WhyChooseAlphaSeekContainer />
      <TeamContainer />
      <ScrollTopBtn />
    </PageWrapper>
  )
}

export default Home
