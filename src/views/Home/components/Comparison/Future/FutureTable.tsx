import React, { useCallback, useMemo, useState } from 'react'

import styled from 'styled-components'

import { LOGO_LIST, LOGO_LIST_FEE } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'
import { TComparison, TFeeTypes } from 'views/Home/types'

import { calcFuturesFee } from '../utils'

const TableWrapper = styled(FlexRow)`
  overflow-x: auto;
`
const TableHeaderWrapper = styled(FlexColumn)`
  width: ${isMobile ? '340%' : '100%'};
  min-width: ${isMobile ? '340%' : '100%'};
`
const TableItemWrapper = styled(FlexRow)<{ isBorder: boolean }>`
  border-top: ${({ isBorder }) => (isBorder ? themeColor.border1 : 'none')};
`

const FutureTable: React.FC<{ tradeAmount: number }> = ({ tradeAmount }) => {
  const feeAmounts = useMemo(() => calcFuturesFee(tradeAmount), [tradeAmount])

  const handleGetFee = useCallback(
    (comparison, type: 'maker' | 'taker' | 'feeAmount') => {
      if (comparison === 'none') {
        if (type === 'feeAmount') return 'Fees Taken from'
        return `${type[0].toUpperCase()}${type.slice(1)} Fees`
      } else {
        if (type === 'feeAmount')
          return feeAmounts[comparison as keyof typeof LOGO_LIST_FEE][type].toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        else return `${feeAmounts[comparison as keyof typeof LOGO_LIST_FEE][type]}%`
      }
    },
    [feeAmounts]
  )

  return (
    <FlexColumn alignItems={'flex-start'}>
      <TableWrapper>
        <TableHeaderWrapper gap={'0px'}>
          <FlexRow justifyContent={'flex-start'} gap={'0px'} margin={'42px 0 0'}>
            <FlexColumn alignItems={'flex-start'} colWidth={'calc(100% / 5)'} />
            {Object.keys(LOGO_LIST_FEE).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} colWidth={'calc(100% / 5)'}>
                <ImageContainer src={LOGO_LIST_FEE[comparison as keyof typeof LOGO_LIST_FEE]} maxHeight={'40px'} width={'auto'} />
              </FlexColumn>
            ))}
          </FlexRow>
          <FlexRow justifyContent={'space-between'} gap={'0px'}>
            {Object.keys(feeAmounts).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} justifyContent={'flex-start'} gap={'0px'}>
                {['maker', 'taker', 'feeAmount'].map((type, index) => (
                  <TableItemWrapper key={type} isBorder={index !== 0}>
                    <TextWrapper
                      margin={'32px 0'}
                      color={comparison === 'none' ? 'text3' : comparison === 'alphaseek' ? 'text1' : 'text4'}
                      fontSize={comparison === 'none' ? 'sm' : 'base'}
                      fontWeight={comparison === 'none' ? 'medium' : 'bold'}
                      lineHeight={20}
                      letterSpacing={'-0.02em'}
                    >
                      {handleGetFee(comparison, type as 'maker' | 'taker' | 'feeAmount')}
                    </TextWrapper>
                  </TableItemWrapper>
                ))}
              </FlexColumn>
            ))}
          </FlexRow>
        </TableHeaderWrapper>
      </TableWrapper>
    </FlexColumn>
  )
}

export default FutureTable
