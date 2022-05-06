import React from 'react'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, MainButton, TextWrapper, TransparentButton } from 'styles/components'
import { shortenAddress } from 'utils'

const WalletSelectionPanel: React.FC = () => {
  const { account } = useActiveWeb3React()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'}>
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
      <FlexRow justifyContent={'center'}>
        <TransparentButton>{'Connected Wallet'}</TransparentButton>
        <TransparentButton>{'Cold Wallet'}</TransparentButton>
      </FlexRow>
    </FlexColumn>
  )
}

export default WalletSelectionPanel
