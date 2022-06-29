import React, { useCallback, useMemo } from 'react'

import styled from 'styled-components'

import { LOGO_LIST_FEE } from 'config/constants'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'

import { calcFuturesFee } from '../utils'

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

const FutureTable: React.FC<{ tradeAmount: number }> = ({ tradeAmount }) => {
  const feeAmounts = useMemo(() => calcFuturesFee(tradeAmount), [tradeAmount])
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()

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
    <FlexColumn alignItems={'flex-start'} margin={isMobile ? '47px 0 0' : isLargeScreen ? '120px 0 0' : '8.33% 0 0'}>
      <TableWrapper>
        <TableHeaderWrapper gap={'0px'} isMobile={isMobile}>
          <FlexRow justifyContent={'flex-start'} gap={'0px'} margin={isMobile ? '0 0 8.66px' : '0 0 15px'}>
            <FlexColumn alignItems={'flex-start'} colWidth={'calc(100% / 5)'} />
            {Object.keys(LOGO_LIST_FEE).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} colWidth={'calc(100% / 5)'}>
                <ImageContainer
                  src={LOGO_LIST_FEE[comparison as keyof typeof LOGO_LIST_FEE]}
                  maxHeight={isMobile ? '16px' : '40px'}
                  width={'auto'}
                />
              </FlexColumn>
            ))}
          </FlexRow>
          <FlexRow justifyContent={'space-between'} gap={'0px'}>
            {Object.keys(feeAmounts).map((comparison) => (
              <FlexColumn key={comparison} alignItems={'flex-start'} justifyContent={'flex-start'} gap={'0px'}>
                {['maker', 'taker', 'feeAmount'].map((type, index) => (
                  <TableItemWrapper key={type} isBorder={index !== 0}>
                    <TextWrapper
                      margin={isMobile ? '24px 0' : '32px 0'}
                      color={comparison === 'none' ? 'text3' : comparison === 'alphaseek' ? 'text1' : 'text4'}
                      fontSize={isMobile ? 12 : isLargeScreen ? 16 : 'sm'}
                      fontWeight={comparison === 'none' ? 'medium' : comparison === 'alphaseek' ? 'semiBold' : 'regular'}
                      lineHeight={isMobile ? '14px' : isLargeScreen ? '19px' : `${(100 * 19) / screenWidth}vmax`}
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
