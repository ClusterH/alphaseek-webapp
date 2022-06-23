import React, { useEffect, useMemo } from 'react'

import { EtherSWRConfig } from 'ether-swr'
import styled from 'styled-components'

import BG_IMG from 'assets/images/blur_img.png'
import BG_IMG_MOBILE from 'assets/images/blur_img_mobile.png'
import SEEK_IMG from 'assets/images/seek_img3.png'
import SEEK_IMG_MOBILE from 'assets/images/seek_img_mobile.png'
import { CONTRACT_ABIS } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useMintPhase } from 'state/mint/hooks'
import { setPanelStatus } from 'state/mint/reducer'
import { FlexColumn, FlexRow, ImageContainer } from 'styles/components'
import { themeColor } from 'styles/theme'
import { getMinterAddress, isLargeScreen, isMobile, isSupportedNetwork } from 'utils'

import { MintContainer } from './MintPanel'

const ImgWrapper = styled(ImageContainer)`
  position: absolute;
  right: ${isMobile ? 'unset' : '0px'};
  bottom: ${isMobile ? 'unset' : '0px'};
  left: ${isMobile ? '0px' : 'unset'};
  top: ${isMobile ? '0px' : 'unset'};
  z-index: 0;
`

const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
  transform: scale(1.1);
`

const WelcomeContainer: React.FC = () => {
  const { account, chainId, library } = useActiveWeb3React()
  const mintPhase = useMintPhase()
  const dispatch = useAppDispatch()

  const ABIs = useMemo(() => {
    return [[getMinterAddress(chainId!), CONTRACT_ABIS.MINTER]] as [[address: string, abi: any]]
  }, [chainId])

  useEffect(() => {
    if (!account || isSupportedNetwork(chainId) === false || mintPhase === 0) dispatch(setPanelStatus(0))
  }, [account, chainId, dispatch, mintPhase])

  return (
    <FlexColumn
      colHeight={isMobile ? 'auto' : 'calc(100vh)'}
      padding={isMobile ? '0% 30px' : isLargeScreen ? '0% 178px 0' : '0% 12.3611111% 0'}
      justifyContent={'flex-start'}
    >
      <ImgWrapper src={isMobile ? BG_IMG_MOBILE : BG_IMG} width={'auto'} height={'auto'} />
      <FlexRow
        isWrap={isMobile}
        margin={isMobile ? 'calc(80px + 54px) 0 0' : isLargeScreen ? 'calc(194px + 7.3vw) 0 0' : 'calc(16.72vh + 7.3vw) 0 0'}
        alignItems={'flex-start'}
      >
        <EtherSWRConfig value={{ web3Provider: library!, ABIs: new Map(ABIs) }}>
          <MintContainer />
        </EtherSWRConfig>
        <SeekImgWrapper
          src={isMobile ? SEEK_IMG_MOBILE : SEEK_IMG}
          width={isMobile ? '100%' : '50%'}
          margin={isMobile ? '-18.3vw 0 0' : '-7.3vw 0 0'}
        />
      </FlexRow>
    </FlexColumn>
  )
}

export default WelcomeContainer
