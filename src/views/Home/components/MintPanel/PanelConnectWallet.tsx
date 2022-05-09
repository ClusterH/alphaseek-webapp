import React from 'react'

import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

import Modal from 'components/Modal/ModalWrapper'
import { WalletConnectionModal } from 'components/WalletConnection'
import { useModal } from 'hooks'
import { useMintPhase } from 'state/mint/hooks'
import { Divider, FlexColumn, FlexRow, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor, themeFontFamily, themeFontWeight, themeTypography } from 'styles/theme'
import { isMobile } from 'utils'

const PhaseTextWrapper = styled(TextWrapper)<{ isActived: boolean }>`
  font-weight: ${themeFontWeight.bold};
  font-family: ${themeFontFamily.title};
  font-size: ${(props) => (props.isActived ? themeTypography.xxl : themeTypography.base)};
  line-height: ${(props) => (props.isActived ? '38px' : '20px')};
  color: ${(props) => (props.isActived ? themeColor.text1 : themeColor.text2)};
  letter-spacing: -0.02em;
`

const RoadMapIndicator: React.FC = () => {
  return (
    <FlexColumn gap={'0px'} colWidth={'fit-content'}>
      <Divider width={'1px'} height={'40px'} margin={'0px'} backColor={themeColor.text1} />
      <FaCircle size={'14px'} color={'#c4c4c4'} />
    </FlexColumn>
  )
}

const ConnectWalletPanel: React.FC = () => {
  const { isOpen, handleOpenModal } = useModal()
  const mintPhase = useMintPhase()

  return (
    <FlexColumn justifyContent={'space-between'} colHeight={'100%'} gap={'0px'}>
      <FlexColumn gap={'0px'}>
        {mintPhase === 1 && (
          <FlexRow>
            <PhaseTextWrapper isActived>{'Private mint'}</PhaseTextWrapper>
            <PhaseTextWrapper isActived={false}>{'1000 Passes | 3 ETH Cost'}</PhaseTextWrapper>
          </FlexRow>
        )}
        {mintPhase > 0 && mintPhase < 3 && (
          <FlexRow justifyContent={'flex-start'} alignItems={'flex-end'}>
            {mintPhase !== 2 && <RoadMapIndicator />}
            <PhaseTextWrapper isActived={mintPhase === 2}>{'Waitlist mint'}</PhaseTextWrapper>
          </FlexRow>
        )}
        {mintPhase > 0 && (
          <FlexRow justifyContent={'flex-start'} alignItems={'flex-end'}>
            {mintPhase !== 3 && <RoadMapIndicator />}
            <PhaseTextWrapper isActived={mintPhase === 3}>{'Public mint'}</PhaseTextWrapper>
          </FlexRow>
        )}
      </FlexColumn>
      <FlexColumn gap={'32px'}>
        <TextWrapper fontFamily={'title'} fontWeight={'medium'} letterSpacing={'-0.02em'}>
          {'Please connect your wallet to proceed'}
        </TextWrapper>
        <MainButton borderRadius={themeBorderRadius.small} width={'100%'} onClick={() => handleOpenModal()}>
          {'Connect Wallet'}
        </MainButton>
      </FlexColumn>
      <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isMobile ? '90%' : '30%'}>
        <WalletConnectionModal />
      </Modal>
    </FlexColumn>
  )
}

export default ConnectWalletPanel
