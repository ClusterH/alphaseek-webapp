import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

import { FlexColumn, FlexRow, HoverTextWrapper, InputWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import { isMobile } from 'utils'
import { useColdWalletInput } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: ${isMobile ? '-10px' : '-4px'};
  left: ${isMobile ? '-14px' : '-16px'};
`

const ColdWalletInputPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { isValid, coldWallet, handleChange } = useColdWalletInput()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
      <GoBackButton onClick={() => handlePanelStatus(panelStatus - 1)}>
        <FaArrowLeft size={isMobile ? 20 : 24} />
      </GoBackButton>
      <TextWrapper fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'bold'} lineHeight={20} letterSpacing={'-0.02em'} textAlign={'center'}>
        {'Paste your external mint address'}
      </TextWrapper>

      <FlexColumn gap={'8px'} alignItems={'flex-start'}>
        <InputWrapper
          placeholder="0x___"
          value={coldWallet}
          onChange={handleChange}
          border={isValid ? themeColor.border1 : `1px solid ${themeColor.error}`}
          height={isMobile ? '40px' : '50px'}
        />
        {isValid === false && (
          <TextWrapper
            color={'error'}
            fontSize={isMobile ? 'base' : 'xs'}
            fontWeight={'bold'}
            lineHeight={20}
            letterSpacing={'-0.02em'}
            textAlign={'center'}
            margin={'0 0 0 24px'}
          >
            {'Please input valid address'}
          </TextWrapper>
        )}
      </FlexColumn>

      <FlexRow rowWidth={isMobile ? '100%' : '80%'}>
        <TextWrapper
          color={'text2'}
          fontSize={isMobile ? 'xl' : 'sm'}
          fontWeight={'semiBold'}
          lineHeight={isMobile ? 42 : 24}
          letterSpacing={'-0.02em'}
          textAlign={'center'}
        >
          {'Please double-check your pasted address before confirming.'}
        </TextWrapper>
      </FlexRow>
      <MainButton
        width={'100%'}
        height={isMobile ? '40px' : '50px'}
        borderRadius={isMobile ? '8px' : themeBorderRadius.small}
        disabled={isValid === false || coldWallet === ''}
        onClick={() => handlePanelStatus(3)}
      >
        {'Confirm Address'}
      </MainButton>
    </FlexColumn>
  )
}

export default ColdWalletInputPanel
