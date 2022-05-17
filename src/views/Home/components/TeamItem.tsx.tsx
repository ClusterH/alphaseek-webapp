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
const AvatarWrapper = styled(ImageContainer)`
  position: absolute;
  top: ${isMobile ? '-70px' : '-100px'};
  left: 50%;
  transform: translateX(-50%);
`

const TeamItem: React.FC<{ item: ITeamItem; isCoreTeam?: boolean }> = ({ item, isCoreTeam }) => {
  return (
    <ItemWrapper padding={isMobile ? '60px 4%' : '120px 45px'} borderRadius={themeBorderRadius.small}>
      <AvatarWrapper src={item.avatar} width={isMobile ? '30%' : isCoreTeam ? '50%' : '40%'} />
      {item.role && (
        <TextWrapper
          color={'text2'}
          fontFamily={'title'}
          fontSize={isMobile ? 'xl' : 'sm'}
          fontWeight={'bold'}
          lineHeight={20}
          letterSpacing={'--0.02em'}
        >
          {item.role}
        </TextWrapper>
      )}
      <GradientTextWrapper
        fontFamily={'title'}
        fontSize={'xl'}
        fontWeight={'bold'}
        lineHeight={24}
        letterSpacing={'--0.05em'}
        margin={isMobile ? '0 0 24px' : '0 0 48px'}
      >
        {item.name}
      </GradientTextWrapper>
      {item.detail && (
        <TextWrapper
          fontFamily={'title'}
          fontSize={isMobile ? 'xl' : 'sm'}
          fontWeight={'medium'}
          lineHeight={isMobile ? 42 : 24}
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
