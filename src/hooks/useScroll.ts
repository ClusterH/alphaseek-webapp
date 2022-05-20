import { useCallback, useEffect, useState } from 'react'

export const useScroll = () => {
  const [isScroll, setIsScroll] = useState(false)

  const changeBackground = useCallback(() => {
    if (window.scrollY >= 66) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }, [])

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  }, [changeBackground])

  return { isScroll }
}
