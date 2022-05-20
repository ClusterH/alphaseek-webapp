import React from 'react'

import styled from 'styled-components'

import BLUR_IMG from 'assets/images/blur_bg2.svg'
import BACK_IMG1 from 'assets/images/faq_img1.png'
import BACK_IMG2 from 'assets/images/faq_img2.png'
import BACK_IMG3 from 'assets/images/faq_img3.png'
import BACK_IMG4 from 'assets/images/faq_img4.png'
import QUESTION_MARK_IMG from 'assets/images/questionMark.svg'
import { FAQList } from 'config/constants/faqList'
import { FlexColumn, FlexRow, GradientTextWrapper, ImageContainer, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'
import { useFAQ } from 'views/Home/hooks'

import FaqItem from './FaqItem'

const BlurImgWrapper = styled(ImageContainer)`
  position: absolute;
  left: 160px;
  top: 160px;
`
const BackImgWrapper = styled(ImageContainer)<{ top?: string; left?: string; bottom?: string; right?: string }>`
  position: absolute;
  top: ${({ top }) => top ?? 'unset'};
  left: ${({ left }) => left ?? 'unset'};
  bottom: ${({ bottom }) => bottom ?? 'unset'};
  right: ${({ right }) => right ?? 'unset'};
`

const FAQPage: React.FC = () => {
  const { openedItemID, handleOpenItemID } = useFAQ()

  return (
    <FlexColumn>
      {isMobile === false && (
        <>
          <BackImgWrapper src={BACK_IMG1} top={'10%'} left={'0px'} width={'20%'} />
          <BackImgWrapper src={BACK_IMG2} top={'50%'} left={'0px'} width={'20%'} />
          <BackImgWrapper src={BACK_IMG3} top={'12%'} right={'0px'} width={'20%'} />
          <BackImgWrapper src={BACK_IMG4} top={'52%'} right={'0px'} width={'20%'} />
        </>
      )}
      <FlexColumn alignItems={'flex-start'} padding={isMobile ? '24% 6% 8%' : '240px 18%'} gap={'0px'}>
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
          {FAQList.map((faq) => (
            <FaqItem key={faq.id} item={faq} openedItemID={openedItemID} handleOpenItemID={handleOpenItemID} />
          ))}
        </FlexColumn>
      </FlexColumn>
    </FlexColumn>
  )
}

export default FAQPage
