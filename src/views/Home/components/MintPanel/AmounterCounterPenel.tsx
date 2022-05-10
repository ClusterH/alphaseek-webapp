import React from 'react'

import { useActiveWeb3React } from 'hooks'
import { useWalletBalance } from 'state/web3/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, MainButton, TextWrapper, TransparentButton } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { shortenAddress } from 'utils'
import { useAmountCounter } from 'views/Home/hooks'

const AmountCounterPanel: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { ethBalance, count, NFT_PRICE, handleCount } = useAmountCounter()
  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'} padding={'2% 6%'}>
      {account && (
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'semiBold'} letterSpacing={'-0.02em'}>{`Connected to ${shortenAddress(
          account
        )}`}</TextWrapper>
      )}
      <FlexRow justifyContent={'flex-start'} gap={'24px'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'BALANCE'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {`${ethBalance} ETH`}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'flex-start'} gap={'24px'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'AMOUNT'}
          </TextWrapper>
        </FlexColumn>
        <FlexRow rowWidth={'fit-content'} gap={'32px'}>
          <HoverTextWrapper
            fontSize={'xxl'}
            fontFamily={'title'}
            fontWeight={'bold'}
            letterSpacing={'-0.02em'}
            lineHeight={30}
            onClick={() => handleCount(false)}
          >
            {'-'}
          </HoverTextWrapper>
          <TextWrapper fontSize={'xl'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'-0.02em'} lineHeight={24}>
            {count}
          </TextWrapper>
          <HoverTextWrapper
            fontSize={'xxl'}
            fontFamily={'title'}
            fontWeight={'bold'}
            letterSpacing={'-0.02em'}
            lineHeight={30}
            onClick={() => handleCount(true)}
          >
            {'+'}
          </HoverTextWrapper>
        </FlexRow>
      </FlexRow>
      <FlexRow justifyContent={'flex-start'} gap={'24px'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'TOTAL'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {`${count * NFT_PRICE} ETH`}
        </TextWrapper>
      </FlexRow>
      <MainButton width={'100%'} disabled>
        {'The mint has not started'}
      </MainButton>
    </FlexColumn>
  )
}

export default AmountCounterPanel
