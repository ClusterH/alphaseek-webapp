import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { InputWrapper } from 'styles/components'
import { isMobile } from 'utils'
import './style.css'

const RangeInput: React.FC<{ min?: number; max?: number; step?: number; defaultValue?: number; onChange: any }> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  onChange,
}) => {
  const inputRef = useRef<any>()
  const [isChanging, setIsChanging] = useState(false)

  const getPercent = useMemo(() => (value: number) => ((value - min) / (max - min)) * 100, [max, min])

  const changeInputProgressPercentStyle = useCallback(() => {
    inputRef.current.style.setProperty('--webkitProgressPercent', `${getPercent(inputRef.current.value)}%`)
  }, [getPercent])

  useEffect(() => {
    changeInputProgressPercentStyle()
    const inputElement = inputRef.current

    const handleUpAndLeave = () => setIsChanging(false)
    const handleDown = () => setIsChanging(true)

    inputElement.addEventListener(isMobile ? 'touchmove' : 'mousemove', changeInputProgressPercentStyle)
    inputElement.addEventListener(isMobile ? 'touchstart' : 'mousedown', handleDown)
    inputElement.addEventListener(isMobile ? 'touchend' : 'mouseup', handleUpAndLeave)
    inputElement.addEventListener(isMobile ? 'touchcancel' : 'mouseleave', handleUpAndLeave)
    return () => {
      inputElement.removeEventListener(isMobile ? 'touchmove' : 'mousemove', changeInputProgressPercentStyle)
      inputElement.removeEventListener(isMobile ? 'touchstart' : 'mousedown', handleDown)
      inputElement.removeEventListener(isMobile ? 'touchend' : 'mouseup', handleUpAndLeave)
      inputElement.removeEventListener(isMobile ? 'touchcancel' : 'mouseleave', handleUpAndLeave)
    }
  }, [isChanging, changeInputProgressPercentStyle])

  useEffect(() => {
    if (!inputRef?.current) return
    changeInputProgressPercentStyle()
  }, [inputRef, changeInputProgressPercentStyle])

  return (
    <InputWrapper
      className="range"
      type="range"
      ref={inputRef}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  )
}

export default RangeInput
