import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { setMintWallet } from 'state/mint/reducer'
import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper, TransparentButton } from 'styles/components'
import { shortenAddress } from 'utils'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: -4px;
  left: -16px;
`

const WalletSelectionPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { account } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
      <GoBackButton onClick={() => handlePanelStatus(panelStatus - 1)}>
        <FaArrowLeft size={24} />
      </GoBackButton>

      {account && (
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'semiBold'} letterSpacing={'-0.02em'}>{`Connected to ${shortenAddress(
          account
        )}`}</TextWrapper>
      )}
      <FlexRow rowWidth={'80%'}>
        <TextWrapper fontFamily={'title'} fontSize={'xl'} fontWeight={'bold'} letterSpacing={'-0.02em'} textAlign={'center'}>
          {'Do you want to mint to the currently connected wallet or a cold wallet?'}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'center'} gap={'24px'}>
        <TransparentButton
          width={'42%'}
          onClick={() => {
            dispatch(setMintWallet({ option: 'connected', wallet: account }))
            handlePanelStatus(3)
          }}
        >
          {'Connected Wallet'}
        </TransparentButton>
        <TransparentButton
          width={'42%'}
          onClick={() => {
            dispatch(setMintWallet({ option: 'cold' }))
            handlePanelStatus(2)
          }}
        >
          {'Cold Wallet'}
        </TransparentButton>
      </FlexRow>
    </FlexColumn>
  )
}

export default WalletSelectionPanel
