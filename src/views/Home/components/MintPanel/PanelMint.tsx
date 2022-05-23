import React from 'react'

import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useMintWallet } from 'state/mint/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { ExplorerDataType, getExplorerLink, isMobile, isSupportedNetwork, shortenAddress } from 'utils'
import { useIsAllowedToMint, useMint } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)`
  position: absolute;
  top: ${isMobile ? '8px' : '-4px'};
  left: ${isMobile ? '0px' : '-16px'};
`

const MintPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { account, chainId } = useActiveWeb3React()
  const { option, wallet } = useMintWallet()
  const { isAllowed, walletLimit, walletCount } = useIsAllowedToMint()
  const { mintPhase, mintCount, mintPrice, ethBalance, isLoading, isMintSuccess, txHash, handleMint } = useMint()

  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'} padding={'6% 6%'}>
      {isLoading === false && isMintSuccess && txHash !== '' ? (
        <FlexColumn>
          <TextWrapper fontWeight={'bold'} lineHeight={48}>
            {''}
          </TextWrapper>
          <TextWrapper fontSize={'xxl'} fontWeight={'bold'} lineHeight={78} fontFamily={'title'}>
            {'Founders Pass Minted!'}
          </TextWrapper>
          <HoverTextWrapper
            color={'text2'}
            margin={'24px 0'}
            onClick={() => {
              if (!chainId || !isSupportedNetwork(chainId) || !txHash) return
              window.open(getExplorerLink(chainId, txHash, ExplorerDataType.TRANSACTION))
            }}
          >
            {'View on Etherscan'}&nbsp;
            <FaExternalLinkAlt size={16} />
          </HoverTextWrapper>
          <MainButton width={'100%'} onClick={() => handlePanelStatus(0)}>
            {'Back to Mint Start'}
          </MainButton>
        </FlexColumn>
      ) : (
        <>
          <GoBackButton onClick={() => handlePanelStatus(option === 'connected' ? panelStatus - 2 : panelStatus - 1)}>
            <FaArrowLeft size={isMobile ? 20 : 24} />
          </GoBackButton>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={'sm'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
                {'BALANCE'}
              </TextWrapper>
            </FlexColumn>
            <TextWrapper fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
              {`${ethBalance} ETH`}
            </TextWrapper>
          </FlexRow>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={'sm'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
                {'AMOUNT'}
              </TextWrapper>
            </FlexColumn>
            <FlexRow rowWidth={'fit-content'} gap={'32px'}>
              <TextWrapper fontSize={'xl'} fontWeight={'bold'} letterSpacing={'-0.02em'} lineHeight={24}>
                {mintCount}
              </TextWrapper>
            </FlexRow>
          </FlexRow>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={'sm'} fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
                {'TOTAL'}
              </TextWrapper>
            </FlexColumn>
            <TextWrapper fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={19}>
              {`${mintCount * Number(mintPrice)} ETH`}
            </TextWrapper>
          </FlexRow>
          <TextWrapper fontSize={'sm'}>{`Mint Limit: ${walletLimit}, Minted Count: ${walletCount}`}</TextWrapper>
          <TextWrapper fontSize={'sm'}>{`Mint Address: ${shortenAddress(
            option === 'connected' ? account! : wallet
          )} (${option})`}</TextWrapper>
          <MainButton
            width={'100%'}
            height={isMobile ? '40px' : '50px'}
            disabled={
              mintPhase === 0 ||
              mintCount === 0 ||
              (option === 'connected' && !account) ||
              (option === 'cold' && !wallet) ||
              isAllowed === false ||
              isLoading
            }
            onClick={handleMint}
          >
            {mintPhase === 0 ? 'The mint has not started' : 'Mint'}&nbsp;
            {isLoading && <ClipLoader color={themeColor.text1} size={'24px'} />}
          </MainButton>
        </>
      )}
    </FlexColumn>
  )
}

export default MintPanel
