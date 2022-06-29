import React from 'react'

import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'

import { useHandleExternalLink } from 'hooks'
import { useScreenSize } from 'state/screenSize/hooks'
import { FlexColumn, GradientTextWrapper, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeGradient } from 'styles/theme'

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
const TwitterIconWrapper = styled(HoverTextWrapper)`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`

const TeamItem: React.FC<{ item: ITeamItem; isCoreTeam?: boolean; isAdvisory?: boolean }> = ({ item, isCoreTeam, isAdvisory }) => {
  const { screenWidth, isLargeScreen, isMobile } = useScreenSize()
  const { handleOpenExternalLink } = useHandleExternalLink()

  return (
    <ItemWrapper
      colWidth={isAdvisory ? (isMobile ? '100%' : 'calc((100% - 40px) / 3)') : '100%'}
      padding={isCoreTeam ? '115px 45px 52px' : isAdvisory ? '77px 45px 76px' : '90px 45px 76px'}
      margin={isAdvisory ? (isMobile ? '0' : '0 0 88px') : '0'}
      borderRadius={themeBorderRadius.small}
      gap={'0px'}
    >
      <AvatarWrapper src={item.avatar} width={isCoreTeam ? '225px' : '140px'} isCoreTeam={isCoreTeam} isAdvisory={isAdvisory} />
      {item.role && (
        <TextWrapper
          color={'text2'}
          fontSize={isMobile ? 16 : 'sm'}
          fontWeight={'bold'}
          lineHeight={isMobile ? '19px' : isLargeScreen ? '19px' : `${(100 * 19) / screenWidth}vmax`}
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
        margin={isCoreTeam ? '14px 0 48px' : isAdvisory ? '0 0 48px' : '14px 0 48px'}
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
      {item.twitter !== undefined && (
        <TwitterIconWrapper onClick={() => handleOpenExternalLink(item.twitter!)}>
          <FaTwitter size={24} />
        </TwitterIconWrapper>
      )}
    </ItemWrapper>
  )
}

export default TeamItem
