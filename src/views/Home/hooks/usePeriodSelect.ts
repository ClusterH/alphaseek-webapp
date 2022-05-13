import { useCallback, useState } from 'react'

import { TPeriod } from '../types'

export const usePeriodSelect = () => {
  const [period, setPeriod] = useState<TPeriod>('Monthly')

  const handlePeriod = useCallback((period) => {
    setPeriod(period)
  }, [])

  return { period, handlePeriod }
}
