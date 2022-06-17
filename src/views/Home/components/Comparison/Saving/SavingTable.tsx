import React, { useMemo, useState } from 'react'

import styled from 'styled-components'

import { LOGO_LIST } from 'config/constants'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'
import { TPeriod, TComparison, TFeeTypes } from 'views/Home/types'

import { calcSpotSavings } from '../utils'

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

const SavingTable: React.FC<{ period: TPeriod; tradeAmount: number }> = ({ period, tradeAmount }) => {
  const feeAmounts = useMemo(() => calcSpotSavings(tradeAmount), [tradeAmount])
  const per = useMemo(() => (period === 'Monthly' ? 1 : 12), [period])

  return (
    <FlexColumn alignItems={'flex-start'}>
      <TextWrapper color={'text2'} fontWeight={'medium'} fontSize={isMobile ? 'xxl' : 'xl'} letterSpacing={'-0.02em'}>
        {`${period} savings versus...`}
      </TextWrapper>
      <TableWrapper>
        <TableHeaderWrapper gap={'0px'}>
          <FlexRow justifyContent={'flex-start'} gap={'0px'} margin={'42px 0 0'}>
            {Object.keys(LOGO_LIST).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} colWidth={'calc(100% / 6)'}>
                {comparison !== 'alphaseek' && (
                  <ImageContainer src={LOGO_LIST[comparison as TComparison]} maxHeight={'40px'} width={'auto'} />
                )}
              </FlexColumn>
            ))}
          </FlexRow>
          <FlexRow justifyContent={'space-between'} gap={'0px'}>
            {Object.keys(feeAmounts).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} justifyContent={'flex-start'} gap={'0px'}>
                {['spot', 'future', 'swap'].map((type, index) => (
                  <TableItemWrapper key={type} isBorder={index !== 0}>
                    <TextWrapper
                      margin={'32px 0'}
                      color={
                        comparison === 'alphaseek' || feeAmounts[comparison as TComparison][type as TFeeTypes] === undefined
                          ? 'text3'
                          : 'text1'
                      }
                      fontSize={comparison === 'alphaseek' ? 'sm' : 'base'}
                      fontWeight={comparison === 'alphaseek' ? 'medium' : 'semiBold'}
                      lineHeight={20}
                      letterSpacing={'-0.02em'}
                    >
                      {comparison === 'alphaseek'
                        ? `${type[0].toUpperCase()}${type.slice(1)} Fees`
                        : feeAmounts[comparison as TComparison][type as TFeeTypes]
                        ? (feeAmounts[comparison as TComparison][type as TFeeTypes]! * per).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 0,
                          })
                        : '_ _'}
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

export default SavingTable
