import React, { useMemo, useState } from 'react'

import styled from 'styled-components'

import { LOGO_LIST } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { TPeriod, TComparison, TFeeTypes } from 'views/Home/types'

const TableItemWrapper = styled(FlexRow)<{ isBorder: boolean }>`
  border-top: ${({ isBorder }) => (isBorder ? themeColor.border1 : 'none')};
`

const FutureTable: React.FC = () => {
  return <FlexColumn alignItems={'flex-start'}></FlexColumn>
}

export default FutureTable
