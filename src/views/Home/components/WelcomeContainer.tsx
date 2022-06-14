import React, { useEffect, useMemo } from 'react'

import { EtherSWRConfig } from 'ether-swr'
import styled from 'styled-components'

import BG_IMG from 'assets/images/blur1_img.png'
import SEEK_IMG from 'assets/images/seek_img1.png'
import Menu from 'components/Header/Menu'
import Logo from 'components/Logo'
import { CONTRACT_ABIS } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { useAppDispatch } from 'state/hooks'
import { useMintPhase } from 'state/mint/hooks'
import { setPanelStatus } from 'state/mint/reducer'
import { FlexColumn, FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { getMinterAddress, isMobile, isSupportedNetwork } from 'utils'

import { MintContainer } from './MintPanel'

const ImgWrapper = styled(ImageContainer)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const SeekImgWrapper = styled(ImageContainer)`
  filter: ${themeColor.dropShadow2};
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
    <FlexColumn colHeight={isMobile ? 'auto' : 'calc(100vh)'} padding={isMobile ? '8% 6%' : '2% 18% 0'}>
      {isMobile === false && <ImgWrapper src={BG_IMG} height={'auto'} width={'auto'} />}
      <FlexRow isWrap={isMobile} margin={'16% 0 0'}>
        <EtherSWRConfig value={{ web3Provider: library!, ABIs: new Map(ABIs) }}>
          <MintContainer />
        </EtherSWRConfig>
        {isMobile === false && <SeekImgWrapper src={SEEK_IMG} width={'40%'} />}
      </FlexRow>
    </FlexColumn>
  )
}

export default WelcomeContainer
