import React from 'react'

import { ethers } from 'ethers'
import { FaArrowLeft, FaExternalLinkAlt, FaMinus, FaPlus } from 'react-icons/fa'
import ClipLoader from 'react-spinners/ClipLoader'
import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { useMintWallet } from 'state/mint/hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import { caluMultipleForBigNumber, convertToBigNumber, ExplorerDataType, getExplorerLink, isSupportedNetwork, shortenAddress } from 'utils'
import { useAmountCounter, useIsAllowedToMint, useMint } from 'views/Home/hooks'
import { IMintPanelProps } from 'views/Home/types'

const GoBackButton = styled(HoverTextWrapper)<{ isMobile: boolean }>`
  position: absolute;
  top: ${(props) => (props.isMobile ? '-10px' : '-4px')};
  left: ${(props) => (props.isMobile ? '-14px' : '-16px')};
`

const MintPanel: React.FC<IMintPanelProps> = ({ panelStatus, handlePanelStatus }) => {
  const { isMobile, isLargeScreen, screenWidth } = useScreenSize()

  const { account, chainId } = useActiveWeb3React()
  const { option, wallet } = useMintWallet()
  const { isAllowed, walletLimit, walletCount } = useIsAllowedToMint()
  const { handleCount } = useAmountCounter()
  const { mintPhase, mintCount, mintPrice, ethBalance, isLoading, isMintSuccess, txHash, handleMint } = useMint()

  return (
    <FlexColumn justifyContent={'space-evenly'} colHeight={'100%'} gap={'0px'}>
      {isLoading === false && isMintSuccess && txHash !== '' ? (
        <FlexColumn>
          <TextWrapper fontWeight={'bold'} lineHeight={48}>
            {''}
          </TextWrapper>
          <TextWrapper
            fontSize={isMobile ? 32 : 'xxl'}
            fontWeight={'bold'}
            lineHeight={isMobile ? '32px' : isLargeScreen ? '78px' : `${(100 * 78) / screenWidth}vmax`}
            fontFamily={'title'}
          >
            {'Founders Pass Minted!'}
          </TextWrapper>
          <HoverTextWrapper
            color={'text2'}
            fontSize={isMobile ? 16 : 'sm'}
            lineHeight={'120%'}
            margin={'24px 0'}
            onClick={() => {
              if (!chainId || !isSupportedNetwork(chainId) || !txHash) return
              window.open(getExplorerLink(chainId, txHash, ExplorerDataType.TRANSACTION))
            }}
          >
            {'View on Etherscan'}&nbsp;
            <FaExternalLinkAlt size={16} />
          </HoverTextWrapper>
          <MainButton
            width={'100%'}
            borderRadius={isMobile ? '8px' : themeBorderRadius.small}
            height={isMobile ? '40px' : '54px'}
            onClick={() => handlePanelStatus(0)}
          >
            {'Back to Mint Start'}
          </MainButton>
        </FlexColumn>
      ) : (
        <>
          <GoBackButton onClick={() => handlePanelStatus(option === 'connected' ? panelStatus - 2 : panelStatus - 1)} isMobile={isMobile}>
            <FaArrowLeft size={isMobile ? 20 : 24} />
          </GoBackButton>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={isMobile ? 16 : 'sm'} fontWeight={'bold'} lineHeight={'120%'} letterSpacing={'0.1em'}>
                {'BALANCE'}
              </TextWrapper>
            </FlexColumn>
            <TextWrapper fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={'120%'}>
              {`${ethBalance} ETH`}
            </TextWrapper>
          </FlexRow>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={isMobile ? 16 : 'sm'} fontWeight={'bold'} lineHeight={'120%'} letterSpacing={'0.1em'}>
                {'AMOUNT'}
              </TextWrapper>
            </FlexColumn>
            <FlexRow rowWidth={'fit-content'} gap={'32px'}>
              <HoverTextWrapper onClick={() => handleCount(false)}>
                <FaMinus />
              </HoverTextWrapper>

              <TextWrapper fontSize={isMobile ? 24 : 'xl'} fontWeight={'bold'} letterSpacing={'-0.02em'} lineHeight={'100%'}>
                {mintCount}
              </TextWrapper>
              <HoverTextWrapper onClick={() => handleCount(true)}>
                <FaPlus />
              </HoverTextWrapper>
            </FlexRow>
          </FlexRow>
          <FlexRow justifyContent={'flex-start'} gap={'24px'}>
            <FlexColumn colWidth={'20%'} alignItems={'flex-start'}>
              <TextWrapper color={'text2'} fontSize={isMobile ? 16 : 'sm'} fontWeight={'bold'} lineHeight={'120%'} letterSpacing={'0.1em'}>
                {'TOTAL'}
              </TextWrapper>
            </FlexColumn>
            <TextWrapper fontWeight={'bold'} letterSpacing={'0.1em'} lineHeight={'120%'}>
              {`${caluMultipleForBigNumber(convertToBigNumber(mintCount.toString(), 0), convertToBigNumber(mintPrice))} ETH`}
            </TextWrapper>
          </FlexRow>
          <FlexColumn gap={isMobile ? '8px' : '12px'}>
            <TextWrapper fontSize={isMobile ? 16 : 'sm'} letterSpacing={'0.1em'} lineHeight={'120%'}>
              {`Mint Limit: ${walletLimit}, Minted Count: ${walletCount}`}
            </TextWrapper>
            <TextWrapper fontSize={isMobile ? 16 : 'sm'} letterSpacing={'0.1em'} lineHeight={'120%'}>
              {`Mint Address: ${shortenAddress(option === 'connected' ? account! : wallet)} (${option})`}
            </TextWrapper>
          </FlexColumn>

          <MainButton
            width={'100%'}
            height={isMobile ? '40px' : '50px'}
            borderRadius={isMobile ? '8px' : themeBorderRadius.small}
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
