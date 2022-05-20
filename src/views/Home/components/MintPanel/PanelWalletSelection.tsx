import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper, TransparentButton } from 'styles/components'
import { isMobile, shortenAddress } from 'utils'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: ${isMobile ? '8px' : '-4px'};
  left: ${isMobile ? '0px' : '-16px'};
`

const WalletSelectionPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { account } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
      <GoBackButton onClick={() => handlePanelStatus(0)}>
        <FaArrowLeft size={isMobile ? 20 : 24} />
      </GoBackButton>
      {account && (
        <TextWrapper
          color={'text2'}
          fontWeight={'semiBold'}
          fontSize={isMobile ? 'xl' : 'base'}
          letterSpacing={'-0.02em'}
        >{`Connected to ${shortenAddress(account)}`}</TextWrapper>
      )}
      <FlexRow rowWidth={'80%'}>
        <TextWrapper fontSize={isMobile ? 'xxl' : 'xl'} fontWeight={'bold'} letterSpacing={'-0.02em'} textAlign={'center'}>
          {'Do you want to mint to the currently connected wallet or a cold wallet?'}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'center'} gap={'24px'} isWrap={isMobile}>
        <TransparentButton
          width={isMobile ? '100%' : '42%'}
          height={isMobile ? '40px' : '50px'}
          onClick={() => {
            dispatch(setMintWallet({ option: 'connected', wallet: '' }))
            handlePanelStatus(3)
          }}
        >
          <TextWrapper fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'semiBold'} lineHeight={24}>
            {'Connected Wallet'}
          </TextWrapper>
        </TransparentButton>
        <TransparentButton
          width={isMobile ? '100%' : '42%'}
          height={isMobile ? '40px' : '50px'}
          onClick={() => {
            dispatch(setMintWallet({ option: 'cold', wallet: '' }))
            handlePanelStatus(2)
          }}
        >
          <TextWrapper fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'semiBold'} lineHeight={24}>
            {'Cold Wallet'}
          </TextWrapper>
        </TransparentButton>
      </FlexRow>
    </FlexColumn>
  )
}

export default WalletSelectionPanel
