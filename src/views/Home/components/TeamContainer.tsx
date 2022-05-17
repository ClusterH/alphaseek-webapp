import React from 'react'

import { TEAM_LIST } from 'config/constants'
import { FlexColumn, FlexRow, GradientTextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import TeamItem from './TeamItem.tsx'

const TeamContainer: React.FC = () => {
  return (
    <FlexColumn padding={isMobile ? '10% 6%' : '6% 18%'}>
      <GradientTextWrapper fontSize={'extra'} fontWeight={'bold'} lineHeight={80} letterSpacing={'-0.05em'}>
        {'Meet the Team.'}
      </GradientTextWrapper>
      <GradientTextWrapper
        fontSize={'xxl'}
        fontWeight={'bold'}
        lineHeight={isMobile ? 42 : 24}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 140px' : '80px 0 180px'}
      >
        {'AlphaSeek Core'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['core'].map((item) => (
          <TeamItem key={item.id} item={item} isCoreTeam />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={'xxl'}
        fontWeight={'bold'}
        lineHeight={isMobile ? 42 : 24}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 140px' : '80px 0 180px'}
      >
        {'UnREAL Accelerator'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['accelerator'].map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={'xxl'}
        fontWeight={'bold'}
        lineHeight={isMobile ? 42 : 24}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 140px' : '80px 0 180px'}
      >
        {'Advisory'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['advisory'].map((item) => (
          <TeamItem key={item.id} item={item} isCoreTeam />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={'xxl'}
        fontWeight={'bold'}
        lineHeight={isMobile ? 42 : 24}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 140px' : '80px 0 180px'}
      >
        {'Counsel'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile} rowWidth={isMobile ? '100%' : '30%'}>
        {TEAM_LIST['counsel'].map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </FlexRow>
    </FlexColumn>
  )
}

export default TeamContainer
