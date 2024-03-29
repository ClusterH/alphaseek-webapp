import React from 'react'

import { TEAM_LIST } from 'config/constants'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, FlexRow, GradientTextWrapper } from 'styles/components'

import TeamItem from './TeamItem.tsx'

const TeamContainer: React.FC = () => {
  const { isLargeScreen, isMobile } = useScreenSize()

  return (
    <FlexColumn padding={isMobile ? '112.45px 30px 0' : isLargeScreen ? '194px 178px 0' : '13.472% 12.3611111vw 0'} gap={'0px'}>
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
      <FlexRow alignItems={'stretch'} gap={isMobile ? '128px' : '20px'} justifyContent={'center'} isWrap>
        {TEAM_LIST['advisory'].map((item) => (
          <TeamItem key={item.id} item={item} isAdvisory />
        ))}
      </FlexRow>
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        margin={isMobile ? '40px 0 125px' : '0 0 149px'}
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
