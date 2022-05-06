import React from 'react'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, MainButton, TextWrapper, TransparentButton } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { shortenAddress } from 'utils'

const MintWithConnectedWalletPanel: React.FC = () => {
  const { account } = useActiveWeb3React()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'} padding={'2% 6%'}>
      {account && (
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'semiBold'} letterSpacing={'-0.02em'}>{`Connected to ${shortenAddress(
          account
        )}`}</TextWrapper>
      )}
      <FlexRow justifyContent={'flex-start'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'BALANCE'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {'6.24 ETH'}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'flex-start'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'AMOUNT'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {'- 2 +'}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'flex-start'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'TOTAL'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {'6 ETH'}
        </TextWrapper>
      </FlexRow>
      <MainButton width={'100%'} disabled>
        {'The mint has not started'}
      </MainButton>
    </FlexColumn>
  )
}

export default MintWithConnectedWalletPanel
