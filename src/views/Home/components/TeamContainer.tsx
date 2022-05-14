import React from 'react'

import { TEAM_LIST } from 'config/constants'
import { FlexColumn, FlexRow, GradientTextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import TeamItem from './TeamItem.tsx'

const TeamContainer: React.FC = () => {
  return (
    <FlexColumn padding={'6% 12%'}>
      <GradientTextWrapper fontFamily={'title'} fontSize={'extra'} fontWeight={'bold'} lineHeight={80} letterSpacing={'-0.05em'}>
        {'Meet the Team.'}
      </GradientTextWrapper>
      <GradientTextWrapper
        fontFamily={'title'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'-0.05em'}
        margin={'80px 0 180px'}
      >
        {'AlphaSeek Core'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={'20px'} isWrap={isMobile}>
        {TEAM_LIST['core'].map((item) => (
          <TeamItem key={item.id} item={item} isCoreTeam />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontFamily={'title'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'-0.05em'}
        margin={'80px 0 180px'}
      >
        {'UnREAL Accelerator'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={'20px'} isWrap={isMobile}>
        {TEAM_LIST['accelerator'].map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontFamily={'title'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'-0.05em'}
        margin={'80px 0 180px'}
      >
        {'Advisory'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={'20px'} isWrap={isMobile}>
        {TEAM_LIST['advisory'].map((item) => (
          <TeamItem key={item.id} item={item} isCoreTeam />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontFamily={'title'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'-0.05em'}
        margin={'80px 0 180px'}
      >
        {'Counsel'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={'20px'} isWrap={isMobile} rowWidth={'30%'}>
        {TEAM_LIST['counsel'].map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </FlexRow>
    </FlexColumn>
  )
}

export default TeamContainer
