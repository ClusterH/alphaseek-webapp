import React, { useEffect } from 'react'

import { ethers } from 'ethers'
import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

import Modal from 'components/Modal/ModalWrapper'
import { WalletConnectionModal } from 'components/WalletConnection'
import { useActiveWeb3React, useGetTotalSupply, useModal, useTotalSupply } from 'hooks'
import { useMintPhase, useMintPrice } from 'state/mint/hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { Divider, FlexColumn, FlexRow, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor, themeFontFamily, themeFontWeight, themeTypography } from 'styles/theme'
import { useGetMintPrice } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

import ConenctedWalletAddrWrapper from './ConenctedAddress'

const PhaseTextWrapper = styled(TextWrapper)<{ isActived: boolean; isMobile: boolean }>`
  font-weight: ${themeFontWeight.semiBold};
  font-family: ${themeFontFamily.title};
  font-size: ${(props) => (props.isActived ? themeTypography.xxl : themeTypography.sm)};
  line-height: ${(props) => (props.isActived ? (props.isMobile ? '25px' : '38px') : props.isMobile ? '13px' : '20px')};
  color: ${(props) => (props.isActived ? themeColor.text1 : themeColor.text2)};
  letter-spacing: -0.02em;
`
const MintingSoonWrapper = styled(TextWrapper)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
`

const RoadMapIndicator: React.FC = () => {
  const { isMobile } = useScreenSize()

  return (
    <FlexColumn gap={'0px'} colWidth={'fit-content'}>
      <Divider width={'1px'} height={isMobile ? '25.71px' : '40px'} margin={'0px'} backColor={themeColor.text1} />
      <FaCircle size={isMobile ? '8px' : '14px'} color={'#c4c4c4'} />
    </FlexColumn>
  )
}

const TotalSupplyCostWrapper = styled(FlexColumn)<{ isMintStarted: boolean }>`
  position: absolute;
  right: ${({ isMintStarted }) => (isMintStarted ? '0' : 'unset')};
  left: ${({ isMintStarted }) => (isMintStarted ? 'unset' : '0')};
  top: 12px;
  align-items: ${({ isMintStarted }) => (isMintStarted ? 'flex-end' : 'flex-start')};
  width: fit-content;
`

const ConnectWalletPanel: React.FC<IMintPanelProps> = ({ handlePanelStatus }) => {
  useGetMintPrice()
  useGetTotalSupply()
  const { screenWidth, isMobile } = useScreenSize()

  const { account } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()
  const mintPhase = useMintPhase()
  const mintPrice = useMintPrice()
  const { totalSupply, tokenSupply } = useTotalSupply()

  useEffect(() => {
    if (account && isOpen) handleOpenModal()
  }, [account, handleOpenModal, isOpen])

  return (
    <FlexColumn justifyContent={'space-between'} colHeight={'100%'} gap={'0px'}>
      {mintPhase === 0 && (
        <MintingSoonWrapper fontSize={isMobile ? 32 : 'xxl'} fontWeight={'semiBold'}>
          {'Minting Soon'}
        </MintingSoonWrapper>
      )}

      <FlexColumn gap={'0px'}>
        <TotalSupplyCostWrapper isMintStarted={mintPhase !== 0}>
          <TextWrapper
            color={'text2'}
            fontSize={isMobile ? 16 : 'sm'}
            fontWeight={'semiBold'}
            lineHeight={'120%'}
          >{`${totalSupply} / ${tokenSupply} Minted`}</TextWrapper>
          <TextWrapper
            color={'text2'}
            fontSize={isMobile ? 16 : 'sm'}
            fontWeight={'semiBold'}
            lineHeight={'120%'}
          >{`${ethers.utils.formatEther(mintPrice)} ETH Cost`}</TextWrapper>
        </TotalSupplyCostWrapper>

        {mintPhase === 1 && (
          <FlexRow>
            <PhaseTextWrapper isActived isMobile={isMobile}>
              {'Private mint'}
            </PhaseTextWrapper>
          </FlexRow>
        )}
        {mintPhase > 0 && mintPhase < 3 && (
          <FlexRow justifyContent={'flex-start'} alignItems={'flex-end'}>
            {mintPhase !== 2 && <RoadMapIndicator />}
            <PhaseTextWrapper isActived={mintPhase === 2} isMobile={isMobile}>
              {'Waitlist mint'}
            </PhaseTextWrapper>
          </FlexRow>
        )}
        {mintPhase > 0 && (
          <FlexRow justifyContent={'flex-start'} alignItems={'flex-end'}>
            {mintPhase !== 3 && <RoadMapIndicator />}
            <PhaseTextWrapper isActived={mintPhase === 3} isMobile={isMobile}>
              {'Public mint'}
            </PhaseTextWrapper>
          </FlexRow>
        )}
      </FlexColumn>
      {account ? (
        <FlexColumn gap={'32px'}>
          <ConenctedWalletAddrWrapper />
          <MainButton
            borderRadius={themeBorderRadius.small}
            width={'100%'}
            height={isMobile ? '40px' : '54px'}
            disabled={mintPhase === 0 || !account}
            onClick={() => handlePanelStatus(1)}
          >
            {mintPhase === 0 ? 'The mint has not started' : 'Continue to Mint'}
          </MainButton>
        </FlexColumn>
      ) : (
        <FlexColumn gap={isMobile ? '20.62px' : '32px'}>
          <TextWrapper fontSize={isMobile ? 16 : 'sm'} fontWeight={'medium'} lineHeight={'120%'} letterSpacing={'-0.02em'}>
            {'Please connect your wallet to proceed.'}
          </TextWrapper>
          <MainButton
            borderRadius={isMobile ? '8px' : themeBorderRadius.small}
            width={'100%'}
            height={isMobile ? '40px' : '54px'}
            onClick={() => handleOpenModal()}
          >
            {'Connect Wallet'}
          </MainButton>
        </FlexColumn>
      )}

      <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isMobile ? '90%' : '30%'}>
        <WalletConnectionModal />
      </Modal>
    </FlexColumn>
  )
}

export default ConnectWalletPanel
