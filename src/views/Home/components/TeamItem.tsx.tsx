import React from 'react'

import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import { FlexColumn, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isLargeScreen, isMobile } from 'utils'

import { ITeamItem } from '../types'

const ItemWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient2};
`
const AvatarWrapper = styled(ImageContainer)<{ isCoreTeam?: boolean; isAdvisory?: boolean }>`
  position: absolute;
  top: ${({ isCoreTeam, isAdvisory }) => (isCoreTeam ? '-138px' : isAdvisory ? '-95px' : '-87px')};
  left: 50%;
  transform: translateX(-50%);
`

const TeamItem: React.FC<{ item: ITeamItem; isCoreTeam?: boolean; isAdvisory?: boolean }> = ({ item, isCoreTeam, isAdvisory }) => {
  return (
    <ItemWrapper
      padding={isCoreTeam ? '115px 45px 52px' : isAdvisory ? '77px 0 39px' : '90px 0 38px'}
      borderRadius={themeBorderRadius.small}
      gap={'0px'}
    >
      <AvatarWrapper src={item.avatar} width={isCoreTeam ? '225px' : '140px'} isCoreTeam={isCoreTeam} isAdvisory={isAdvisory} />
      {item.role && (
        <TextWrapper
          color={'text2'}
          fontSize={isMobile ? 16 : 'sm'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '19px' : isLargeScreen ? '19px' : 19}
          letterSpacing={'-0.02em'}
        >
          {item.role}
        </TextWrapper>
      )}
      <GradientTextWrapper
        fontSize={isMobile ? 24 : 'xl'}
        fontWeight={'bold'}
        lineHeight={'100%'}
        letterSpacing={'-0.05em'}
        textAlign={'center'}
        margin={isCoreTeam ? '14px 0 48px' : isAdvisory ? '0 0 32px' : '14px 0 0px'}
      >
        {item.name}
      </GradientTextWrapper>
      {item.detail && (
        <TextWrapper
          fontSize={isMobile ? 16 : 'sm'}
          fontWeight={'medium'}
          lineHeight={'150%'}
          letterSpacing={'0.02em'}
          textAlign={'center'}
        >
          {item.detail}
        </TextWrapper>
      )}
      {item.twitter && <FaTwitter size={24} />}
    </ItemWrapper>
  )
}

export default TeamItem
