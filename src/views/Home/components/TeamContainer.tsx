import React from 'react'

import { TEAM_LIST } from 'config/constants'
import { FlexColumn, FlexRow, GradientTextWrapper } from 'styles/components'
import { isLargeScreen, isMobile } from 'utils'

import TeamItem from './TeamItem.tsx'

const TeamContainer: React.FC = () => {
  return (
    <FlexColumn padding={isMobile ? '112.45px 30px 0' : isLargeScreen ? '114px 178px 0' : '7.917% 12.3611111% 0'} gap={'0px'}>
      <GradientTextWrapper
        fontSize={isMobile ? 48 : isLargeScreen ? 80 : 'extra'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
      >
        {'Meet the Team.'}
      </GradientTextWrapper>
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '28px 0 170px' : '65px 0 194px'}
      >
        {'AlphaSeek Core'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '162px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['core'].map((item) => (
          <TeamItem key={item.id} item={item} isCoreTeam />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 125px' : '88px 0 149px'}
      >
        {'UnREAL Accelerator'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['accelerator'].map((item) => (
          <TeamItem key={item.id} item={item} />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 125px' : '88px 0 149px'}
      >
        {'Advisory'}
      </GradientTextWrapper>
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} isWrap={isMobile}>
        {TEAM_LIST['advisory'].map((item) => (
          <TeamItem key={item.id} item={item} isAdvisory />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 125px' : '88px 0 149px'}
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
