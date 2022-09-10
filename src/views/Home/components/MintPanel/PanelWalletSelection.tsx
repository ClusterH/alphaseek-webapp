import React, { useEffect } from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

import { useActiveWeb3React, useCheckMintable } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper, TransparentButton } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { IMintPanelProps } from 'views/Home/types'

import ConenctedWalletAddrWrapper from './ConenctedAddress'

const GoBackButton = styled(HoverTextWrapper)<{ isMobile: boolean }>`
  position: absolute;
  top: ${(props) => (props.isMobile ? '-10px' : '-4px')};
  left: ${(props) => (props.isMobile ? '-14px' : '-16px')};
`

const WalletSelectionPanel: React.FC<IMintPanelProps> = ({ handlePanelStatus }) => {
  const dispatch = useAppDispatch()
  const { account } = useActiveWeb3React()
  const { isMobile, isLargeScreen } = useScreenSize()
  const { isMintable, handleIsMintable } = useCheckMintable()

  useEffect(() => {
    if (account) handleIsMintable(account, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
      <GoBackButton onClick={() => handlePanelStatus(0)} isMobile={isMobile}>
        <FaArrowLeft size={isMobile ? 20 : 24} />
      </GoBackButton>
      <ConenctedWalletAddrWrapper />
      <FlexRow rowWidth={isMobile ? '100%' : '80%'}>
        <TextWrapper fontSize={isMobile ? 20 : 'xl'} fontWeight={'bold'} letterSpacing={'-0.02em'} lineHeight={'120%'} textAlign={'center'}>
          {'Do you want to mint to the currently connected wallet or a cold wallet?'}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'center'} gap={isMobile ? '12px' : '24px'} isWrap={isMobile}>
        <TransparentButton
          width={isMobile ? '100%' : isLargeScreen ? '183px' : '12.7vw'}
          height={isMobile ? '40px' : '52px'}
          borderRadius={isMobile ? '8px' : themeBorderRadius.small}
          disabled={isMintable === false}
          onClick={async () => {
            if (isMintable === true) {
              dispatch(setMintWallet({ option: 'connected', wallet: account }))
              handlePanelStatus(3)
            }
          }}
        >
          <TextWrapper fontSize={isMobile ? 16 : 'sm'} fontWeight={'semiBold'} lineHeight={'150%'} textAlign={'center'}>
            {'Connected Wallet'}
          </TextWrapper>
        </TransparentButton>
        <TransparentButton
          width={isMobile ? '100%' : isLargeScreen ? '183px' : '12.7vw'}
          height={isMobile ? '40px' : '52px'}
          borderRadius={isMobile ? '8px' : themeBorderRadius.small}
          onClick={() => {
            dispatch(setMintWallet({ option: 'cold', wallet: '' }))
            handlePanelStatus(2)
          }}
        >
          <TextWrapper fontSize={isMobile ? 16 : 'sm'} fontWeight={'semiBold'} lineHeight={'150%'} textAlign={'center'}>
            {'Cold Wallet'}
          </TextWrapper>
        </TransparentButton>
      </FlexRow>
    </FlexColumn>
  )
}

export default WalletSelectionPanel
