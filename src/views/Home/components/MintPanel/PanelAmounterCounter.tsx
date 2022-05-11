import React from 'react'

import { FaArrowLeft } from 'react-icons/fa'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useMintPhase, useMintWallet } from 'state/mint/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { shortenAddress } from 'utils'
import { useAmountCounter, useMint } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: -4px;
  left: -16px;
`

const AmountCounterPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { account } = useActiveWeb3React()
  const { ethBalance, mintCount, mintPrice, handleCount } = useAmountCounter()
  const mintPhase = useMintPhase()
  const { option, wallet } = useMintWallet()
  const { isLoading, handleMint } = useMint()

  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'} padding={'2% 6%'}>
      {panelStatus === 3 && (
        <GoBackButton onClick={() => handlePanelStatus(option === 'connected' ? panelStatus - 2 : panelStatus - 1)}>
          <FaArrowLeft size={24} />
        </GoBackButton>
      )}
      {account && panelStatus === 0 && (
        <TextWrapper color={'text2'} fontFamily={'title'} fontWeight={'semiBold'} letterSpacing={'-0.02em'}>{`Connected to ${shortenAddress(
          account
        )}`}</TextWrapper>
      )}
      <FlexRow justifyContent={'flex-start'} gap={'24px'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontSize={'sm'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'BALANCE'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {`${ethBalance} ETH`}
        </TextWrapper>
      </FlexRow>
      <FlexRow justifyContent={'flex-start'} gap={'24px'}>
        <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
          <TextWrapper color={'text2'} fontSize={'sm'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
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
            {mintCount}
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
          <TextWrapper color={'text2'} fontSize={'sm'} fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
            {'TOTAL'}
          </TextWrapper>
        </FlexColumn>
        <TextWrapper fontFamily={'title'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
          {`${mintCount * Number(mintPrice)} ETH`}
        </TextWrapper>
      </FlexRow>
      {panelStatus === 3 && (
        <TextWrapper fontSize={'sm'}>{`Mint Address: ${shortenAddress(
          option === 'connected' ? account! : wallet
        )} (${option})`}</TextWrapper>
      )}
      {panelStatus === 3 ? (
        <MainButton
          width={'100%'}
          disabled={mintCount === 0 || (option === 'connected' && !account) || (option === 'cold' && !wallet) || isLoading}
          onClick={handleMint}
        >
          {'Mint'}&nbsp;
          {isLoading && <ClipLoader color={themeColor.text1} size={'24px'} />}
        </MainButton>
      ) : (
        <MainButton width={'100%'} disabled={mintPhase === 0 || mintCount === 0} onClick={() => handlePanelStatus(panelStatus + 1)}>
          {mintPhase === 0 ? 'The mint has not started' : 'Next'}
        </MainButton>
      )}
    </FlexColumn>
  )
}

export default AmountCounterPanel
