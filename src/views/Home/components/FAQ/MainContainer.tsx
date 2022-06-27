import React from 'react'

import { FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import QUESTION_MARK_IMG from 'assets/images/questionMark.svg'
import { FAQList } from 'config/constants/faqList'
import { useAppNavigate } from 'hooks'
import { FlexColumn, FlexRow, GradientTextWrapper, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isLargeScreen, isMobile } from 'utils'
import { useFAQ } from 'views/Home/hooks'

import FaqItem from './FaqItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: -42%;
  top: -86%;
`
const MoreFAQWrapper = styled(FlexRow)`
  cursor: pointer;
  border-bottom: ${themeColor.border1};
`

const FAQContainer: React.FC = () => {
  const { openedItemID, handleOpenItemID } = useFAQ()
  const { handleNavigate } = useAppNavigate()

  return (
    <FlexColumn
      alignItems={'flex-start'}
      padding={isMobile ? '52.25px 30px' : isLargeScreen ? '181px 362px' : '12.569% 25.1389%'}
      gap={'0px'}
    >
      <FlexColumn gap={'0px'} alignItems={'flex-start'} colWidth={'fit-content'}>
        {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'80%'} />}

        <GradientTextWrapper fontSize={isMobile ? 32 : 'xxxl'} fontWeight={'bold'} lineHeight={'100%'} letterSpacing={'-0.05em'}>
          {'Frequently Asked'}
        </GradientTextWrapper>
        <FlexRow rowWidth={'fit-content'} justifyContent={'flex-start'}>
          <TextWrapper fontSize={isMobile ? 32 : 'xxxl'} fontWeight={'bold'} lineHeight={'100%'} letterSpacing={'-0.05em'}>
            {'Questions'}
          </TextWrapper>
          <ImageContainer src={QUESTION_MARK_IMG} width={'28px'} />
        </FlexRow>
      </FlexColumn>

      <FlexColumn gap={'0px'} padding={'4% 0'}>
        {FAQList.slice(0, 5).map((faq) => (
          <FaqItem key={faq.id} item={faq} openedItemID={openedItemID} handleOpenItemID={handleOpenItemID} />
        ))}
      </FlexColumn>
      <MoreFAQWrapper justifyContent={'flex-start'} rowWidth={'fit-content'} onClick={() => handleNavigate('/faq')}>
        <HoverTextWrapper color={'text3'} fontSize={16} lineHeight={'120%'} fontWeight={'bold'}>
          {`More FAQ ${'  '} →`}
        </HoverTextWrapper>
      </MoreFAQWrapper>
    </FlexColumn>
  )
}

export default FAQContainer
