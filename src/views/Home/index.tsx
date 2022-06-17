import React from 'react'

import { PageWrapper } from 'styles/components'

import {
  AboutContainer,
  ComparisonContainer,
  FAQContainer,
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
      <ComparisonContainer />
      <WhyChooseAlphaSeekContainer />
      <TeamContainer />
      <FAQContainer />
      <ScrollTopBtn />
    </PageWrapper>
  )
}

export default Home
