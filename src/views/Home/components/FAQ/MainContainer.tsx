import React from 'react'

import { FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import QUESTION_MARK_IMG from 'assets/images/questionMark.svg'
import { FAQList } from 'config/constants/faqList'
import { FlexColumn, FlexRow, GradientTextWrapper, HoverTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { themeColor } from 'styles/theme'
import { isMobile } from 'utils'
import { useFAQ } from 'views/Home/hooks'

import FaqItem from './FaqItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: 160px;
  top: 62px;
`
const MoreFAQWrapper = styled(FlexRow)`
  cursor: pointer;
  border-bottom: ${themeColor.border1};
`

const FAQContainer: React.FC = () => {
  const { openedItemID, handleOpenItemID } = useFAQ()

  return (
    <FlexColumn alignItems={'flex-start'} padding={isMobile ? '6%' : '6% 18%'} gap={'0px'}>
      {isMobile === false && <BlurImgWrapper src={BLUR_IMG} width={'16%'} />}
      <GradientTextWrapper fontSize={'xxxl'} fontWeight={'bold'} lineHeight={52} letterSpacing={'-0.05em'}>
        {'Frequently Asked'}
      </GradientTextWrapper>
      <FlexRow rowWidth={'fit-content'} justifyContent={'flex-start'}>
        <TextWrapper fontSize={'xxxl'} fontWeight={'bold'} lineHeight={52} letterSpacing={'-0.05em'}>
          {'Questions'}
        </TextWrapper>
        <ImageContainer src={QUESTION_MARK_IMG} width={'28px'} />
      </FlexRow>
      <FlexColumn gap={'0px'} padding={'4% 0'}>
        {FAQList.slice(0, 5).map((faq) => (
          <FaqItem key={faq.id} item={faq} openedItemID={openedItemID} handleOpenItemID={handleOpenItemID} />
        ))}
      </FlexColumn>
      <MoreFAQWrapper justifyContent={'flex-start'} rowWidth={'fit-content'}>
        <HoverTextWrapper>{'More FAQ'}&nbsp;</HoverTextWrapper>
        <FaArrowRight size={18} />
      </MoreFAQWrapper>
    </FlexColumn>
  )
}

export default FAQContainer
