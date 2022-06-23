import React from 'react'

import { FutureComparisonContainer } from './Future'
import { SavingComparisonContainer } from './Saving'

const ComparisonMainContainer: React.FC = () => {
  return (
    <>
      <SavingComparisonContainer />
      <FutureComparisonContainer />
    </>
  )
}

export default ComparisonMainContainer
