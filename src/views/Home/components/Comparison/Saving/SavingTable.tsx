import React, { useMemo } from 'react'

import styled from 'styled-components'

import { LOGO_LIST } from 'config/constants'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { TComparison, TFeeTypes, TPeriod } from 'views/Home/types'

import { calcSpotSavings } from '../utils'

const TableWrapper = styled(FlexRow)`
  overflow-x: auto;
`
const TableHeaderWrapper = styled(FlexColumn)<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '240%' : '100%')};
  min-width: ${({ isMobile }) => (isMobile ? '240%' : '100%')};
`
const TableItemWrapper = styled(FlexRow)<{ isBorder: boolean }>`
  border-top: ${({ isBorder }) => (isBorder ? themeColor.border1 : 'none')};
`

const SavingTable: React.FC<{ period: TPeriod; tradeAmount: number }> = ({ period, tradeAmount }) => {
  const feeAmounts = useMemo(() => calcSpotSavings(tradeAmount), [tradeAmount])
  const per = useMemo(() => (period === 'Monthly' ? 1 : 12), [period])
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()

  return (
    <FlexColumn alignItems={'flex-start'} gap={'0px'}>
      <TextWrapper
        color={'text2'}
        fontWeight={'medium'}
        fontSize={isMobile ? 16 : isLargeScreen ? 24 : 'xl'}
        lineHeight={isMobile ? '19px' : isLargeScreen ? '29px' : `${(100 * 29) / screenWidth}vmax`}
        letterSpacing={'-0.02em'}
      >
        {`${period} savings versus...`}
      </TextWrapper>
      <TableWrapper>
        <TableHeaderWrapper gap={'0px'} isMobile={isMobile}>
          <FlexRow justifyContent={'flex-start'} gap={'0px'} margin={isMobile ? '42px 0 0' : '47px 0 22px'}>
            {Object.keys(LOGO_LIST).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} colWidth={'calc(100% / 6)'}>
                {comparison !== 'alphaseek' && (
                  <ImageContainer src={LOGO_LIST[comparison as TComparison]} maxHeight={isMobile ? '16px' : '40px'} width={'auto'} />
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
                      margin={isMobile ? '24px 0' : '32px 0'}
                      color={
                        comparison === 'alphaseek' || feeAmounts[comparison as TComparison][type as TFeeTypes] === undefined
                          ? 'text3'
                          : 'text1'
                      }
                      fontSize={comparison === 'alphaseek' ? (isMobile ? 12 : isLargeScreen ? 16 : 'sm') : isMobile ? 13 : 18}
                      fontWeight={comparison === 'alphaseek' ? 'medium' : 'semiBold'}
                      lineHeight={isMobile ? '16px' : isLargeScreen ? '21px' : `${(100 * 21) / screenWidth}vmax`}
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
