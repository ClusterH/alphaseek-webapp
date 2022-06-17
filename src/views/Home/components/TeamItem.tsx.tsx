import React from 'react'

import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import { FlexColumn, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'
import { isMobile } from 'utils'

import { ITeamItem } from '../types'

const ItemWrapper = styled(FlexColumn)`
  background: ${themeGradient.bgGradient2};
`
const AvatarWrapper = styled(ImageContainer)<{ isAdvisory?: boolean }>`
  position: absolute;
  top: ${({ isAdvisory }) => (isMobile ? '-70px' : isAdvisory ? '-80px' : '-100px')};
  left: 50%;
  transform: translateX(-50%);
`

const TeamItem: React.FC<{ item: ITeamItem; isCoreTeam?: boolean; isAdvisory?: boolean }> = ({ item, isCoreTeam, isAdvisory }) => {
  return (
    <ItemWrapper padding={isMobile ? '60px 0' : isCoreTeam ? '120px 0' : '80px 0 40px'} borderRadius={themeBorderRadius.small}>
      <AvatarWrapper src={item.avatar} width={isMobile ? '30%' : isCoreTeam ? '50%' : '40%'} isAdvisory={isAdvisory} />
      {item.role && (
        <TextWrapper color={'text2'} fontSize={isMobile ? 'xl' : 'sm'} fontWeight={'bold'} lineHeight={20} letterSpacing={'--0.02em'}>
          {item.role}
        </TextWrapper>
      )}
      <GradientTextWrapper
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'--0.05em'}
        margin={isMobile ? '0 0 24px' : isAdvisory ? '0 0 30px' : '0 0 48px'}
      >
        {item.name}
      </GradientTextWrapper>
      {item.detail && (
        <FlexColumn padding={isMobile ? '0 4%' : '0 45px'}>
          <TextWrapper
            fontSize={isMobile ? 'xl' : 'sm'}
            fontWeight={'medium'}
            lineHeight={isMobile ? 42 : 24}
            letterSpacing={'0.02em'}
            textAlign={'center'}
          >
            {item.detail}
          </TextWrapper>
        </FlexColumn>
      )}
      {item.twitter && <FaTwitter size={24} />}
    </ItemWrapper>
  )
}

export default TeamItem
