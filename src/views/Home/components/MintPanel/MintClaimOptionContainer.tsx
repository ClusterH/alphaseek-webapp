import React from 'react'

import styled from 'styled-components'

import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, HoverTextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { useMintClaimSwitcher } from 'views/Home/hooks'

const OptionWrapper = styled(FlexColumn)<{ isActive: boolean }>`
  width: fit-content;
  padding: 12px 36px;
  border-radius: 12px 12px 0 0;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  cursor: pointer;
`

const MintClaimOptionContainer: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { option, handleSwitchOption } = useMintClaimSwitcher()
  return (
    <FlexRow justifyContent={'flex-start'}>
      <OptionWrapper backgroundColor={themeColor.background5} isActive={option === 'mint'} onClick={() => handleSwitchOption('mint')}>
        <HoverTextWrapper fontWeight={'bold'} letterSpacing={'-0.02em'}>
          {'Mint'}
        </HoverTextWrapper>
      </OptionWrapper>
      {account && (
        <OptionWrapper backgroundColor={themeColor.background5} isActive={option === 'claim'} onClick={() => handleSwitchOption('claim')}>
          <HoverTextWrapper fontWeight={'bold'} letterSpacing={'-0.02em'}>
            {'Claim'}
          </HoverTextWrapper>
        </OptionWrapper>
      )}
    </FlexRow>
  )
}

export default MintClaimOptionContainer
