import { useCallback, useState } from 'react'

import { TMintClaimOption } from '../types'

export const useMintClaimSwitcher = () => {
  const [option, setOption] = useState<TMintClaimOption>('mint')

  const handleSwitchOption = useCallback(
    (opt: TMintClaimOption) => {
      if (opt === option) return
      setOption(opt)
    },
    [option]
  )

  return { option, handleSwitchOption }
}
