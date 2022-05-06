import React from 'react'

import { useModal } from 'hooks'
import { FlexColumn, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'

const ConnectWalletPanel: React.FC = () => {
  const { handleOpenModal } = useModal()
  return (
    <FlexColumn justifyContent={'space-between'} colHeight={'100%'}>
      <FlexColumn gap={'0px'}>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} fontSize={'xxl'} lineHeight={38} letterSpacing={'-0.02em'}>
          {'Private mint'}
        </TextWrapper>
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'}>
          {'1000 Passes | 3 ETH Cost'}
        </TextWrapper>
      </FlexColumn>
      <FlexColumn gap={'32px'}>
        <TextWrapper fontFamily={'title'} fontWeight={'medium'} letterSpacing={'-0.02em'}>
          {'Please connect your wallet to proceed'}
        </TextWrapper>
        <MainButton borderRadius={themeBorderRadius.small} width={'100%'} onClick={() => handleOpenModal()}>
          {'Connect Wallet'}
        </MainButton>
      </FlexColumn>
    </FlexColumn>
  )
}

export default ConnectWalletPanel
