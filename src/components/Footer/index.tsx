import React, { useMemo } from 'react'

import LOGO from 'assets/images/main_logo_black.svg'
import { useAppNavigate } from 'hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import { isMobile } from 'utils'

const Footer: React.FC = () => {
  const { handleNavigate } = useAppNavigate()
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <FlexColumn>
      <FlexRow padding={'6%'} backgroundColor={themeColor.background1} isWrap={isMobile}>
        <FlexRow justifyContent={isMobile ? 'center' : 'flex-start'} rowWidth={'fit-content'} gap={'24px'} margin={'24px 0'}>
          <HoverTextWrapper lineHeight={20} onClick={() => handleNavigate('/')}>
            {'Home'}
          </HoverTextWrapper>
        </FlexRow>
        <FlexColumn alignItems={isMobile ? 'center' : 'flex-start'} colWidth={'fit-content'} gap={'0px'}>
          <ImageContainer src={LOGO} height={isMobile ? '20px' : '27px'} borderRadius={themeBorderRadius.none} />
          <TextWrapper fontSize={'lg'}>{`©${currentYear}. All Rights Reserved`}</TextWrapper>
        </FlexColumn>
      </FlexRow>
    </FlexColumn>
  )
}

export default Footer
