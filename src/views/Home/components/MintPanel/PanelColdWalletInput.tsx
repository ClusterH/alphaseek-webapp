import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

import { FlexColumn, FlexRow, HoverTextWrapper, InputWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { useColdWalletInput } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: -4px;
  left: -16px;
`

const ColdWalletInputPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { isValid, coldWallet, handleChange } = useColdWalletInput()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
      <GoBackButton onClick={() => handlePanelStatus(panelStatus - 1)}>
        <FaArrowLeft size={24} />
      </GoBackButton>
      <TextWrapper fontFamily={'title'} fontSize={'sm'} fontWeight={'bold'} lineHeight={20} letterSpacing={'-0.02em'} textAlign={'center'}>
        {'Paste your external mint address'}
      </TextWrapper>

      <FlexColumn gap={'8px'} alignItems={'flex-start'}>
        <InputWrapper placeholder="0x___" onChange={handleChange} border={isValid ? themeColor.border1 : `1px solid ${themeColor.error}`} />
        {isValid === false && (
          <TextWrapper
            color={'error'}
            fontFamily={'title'}
            fontSize={'xs'}
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

      <FlexRow rowWidth={'80%'}>
        <TextWrapper
          color={'text2'}
          fontFamily={'title'}
          fontSize={'sm'}
          fontWeight={'semiBold'}
          lineHeight={24}
          letterSpacing={'-0.02em'}
          textAlign={'center'}
        >
          {'Please double-check your pasted address before confirming.'}
        </TextWrapper>
      </FlexRow>
      <MainButton width={'100%'} disabled={isValid === false || coldWallet === ''} onClick={() => handlePanelStatus(3)}>
        {'Confirm Address'}
      </MainButton>
    </FlexColumn>
  )
}

export default ColdWalletInputPanel
