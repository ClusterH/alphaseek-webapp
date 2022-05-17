import React from 'react'

import { FlexColumn } from 'styles/components'

import { FutureComparisonContainer } from './Future'
import { SavingComparisonContainer } from './Saving'

const ComparisonMainContainer: React.FC = () => {
  return (
    <FlexColumn>
      <SavingComparisonContainer />
      <FutureComparisonContainer />
    </FlexColumn>
  )
}

export default ComparisonMainContainer
