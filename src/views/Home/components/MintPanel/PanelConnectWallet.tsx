import React, { useEffect } from 'react'

import { ethers } from 'ethers'
import { FaCircle } from 'react-icons/fa'
import styled from 'styled-components'

import Modal from 'components/Modal/ModalWrapper'
import { WalletConnectionModal } from 'components/WalletConnection'
import { useActiveWeb3React, useGetTotalSupply, useModal, useTotalSupply } from 'hooks'
import { useMintPhase, useMintPrice } from 'state/mint/hooks'
import { Divider, FlexColumn, FlexRow, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor, themeFontFamily, themeFontWeight, themeTypography } from 'styles/theme'
import { isMobile, shortenAddress } from 'utils'
import { useGetMintPrice } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

import ConenctedWalletAddrWrapper from './ConenctedAddress'

const PhaseTextWrapper = styled(TextWrapper)<{ isActived: boolean }>`
  font-weight: ${themeFontWeight.bold};
  font-family: ${themeFontFamily.title};
  font-size: ${(props) => (props.isActived ? themeTypography.xxl : themeTypography.base)};
  line-height: ${(props) => (props.isActived ? '38px' : '20px')};
  color: ${(props) => (props.isActived ? themeColor.text1 : themeColor.text2)};
  letter-spacing: -0.02em;
`
const MintingSoonWrapper = styled(PhaseTextWrapper)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
`

const RoadMapIndicator: React.FC = () => {
  return (
    <FlexColumn gap={'0px'} colWidth={'fit-content'}>
      <Divider width={'1px'} height={'40px'} margin={'0px'} backColor={themeColor.text1} />
      <FaCircle size={'14px'} color={'#c4c4c4'} />
    </FlexColumn>
  )
}

const TotalSupplyCostWrapper = styled(FlexColumn)<{ isMintStarted: boolean }>`
  position: absolute;
  right: 0;
  top: 12px;
  align-items: ${({ isMintStarted }) => (isMintStarted ? 'flex-start' : 'flex-end')};
  width: fit-content;
`

const ConnectWalletPanel: React.FC<IMintPanelProps> = ({ handlePanelStatus }) => {
  useGetMintPrice()
  useGetTotalSupply()

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
      {mintPhase === 0 && <MintingSoonWrapper isActived>{'Minting Soon'}</MintingSoonWrapper>}

      <FlexColumn gap={'0px'}>
        <TotalSupplyCostWrapper isMintStarted={mintPhase !== 0}>
          <PhaseTextWrapper isActived={false}>{`${totalSupply} / ${tokenSupply} Minted`}</PhaseTextWrapper>
          <PhaseTextWrapper isActived={false}>{`${ethers.utils.formatEther(mintPrice)} ETH Cost`}</PhaseTextWrapper>
        </TotalSupplyCostWrapper>

        {mintPhase === 1 && (
          <FlexRow>
            <PhaseTextWrapper isActived>{'Private mint'}</PhaseTextWrapper>
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
      {account ? (
        <FlexColumn gap={'32px'}>
          <ConenctedWalletAddrWrapper />
          <MainButton
            borderRadius={themeBorderRadius.small}
            width={'100%'}
            height={isMobile ? '40px' : '50px'}
            disabled={mintPhase === 0 || !account}
            onClick={() => handlePanelStatus(1)}
          >
            {mintPhase === 0 ? 'The mint has not started' : 'Continue to Mint'}
          </MainButton>
        </FlexColumn>
      ) : (
        <FlexColumn gap={'32px'}>
          <TextWrapper fontWeight={'medium'} letterSpacing={'-0.02em'}>
            {'Please connect your wallet to proceed'}
          </TextWrapper>
          <MainButton
            borderRadius={themeBorderRadius.small}
            width={'100%'}
            height={isMobile ? '40px' : '50px'}
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
