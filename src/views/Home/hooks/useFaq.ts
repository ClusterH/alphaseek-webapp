import { useCallback, useState } from 'react'

import { IFAQItem } from '../types'

export const useFAQ = () => {
  const [openedItemID, setOpenedItemID] = useState<number>(0)

  const handleOpenItemID = useCallback(
    (item: IFAQItem) => {
      if (openedItemID === item.id) setOpenedItemID(0)
      else setOpenedItemID(item.id)
    },
    [openedItemID]
  )

  return { openedItemID, handleOpenItemID }
}
