import React from 'react'

import { isMobile } from 'react-device-detect'

import { NETWORK_INDICATOR } from 'config/constants'
import { useActiveWeb3React } from 'hooks'
import { FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeColor } from 'styles/theme'
import { isSupportedNetwork } from 'utils/web3Helpers'

const NetworkIndicator: React.FC = () => {
  const { chainId } = useActiveWeb3React()

  return (
    <FlexRow
      rowWidth={'fit-content'}
      backgroundColor={themeColor.background4}
      rowHeight={'38px'}
      padding={'0 12px'}
      margin={'0 12px 0 -23px'}
      borderRadius={themeBorderRadius.medium}
      gap={'4px'}
    >
      {chainId && isSupportedNetwork(chainId) && (
        <>
          <ImageContainer src={NETWORK_INDICATOR[chainId!].icon} width={isMobile ? '10px' : '14px'} />
          <TextWrapper fontWeight={'bold'}>{NETWORK_INDICATOR[chainId!].name}</TextWrapper>
        </>
      )}
    </FlexRow>
  )
}

export default NetworkIndicator
