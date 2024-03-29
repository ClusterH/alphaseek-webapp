import { CgClose } from 'react-icons/cg'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import { themeBorderRadius, themeBreakPoint, themeColor, themeFontFamily, themeFontWeight, themeGradient, themeTypography } from './theme'
import { TFlexAlignItems, TFlexJustifyContents, ThemeProps } from './types'

export const getWidthString = (span: number) => {
  if (!span) return

  const width = (100 * span) / 12
  return `width: ${width}%;`
}
export const FlexRow = styled.div<{
  justifyContent?: TFlexJustifyContents
  alignItems?: TFlexAlignItems
  gap?: string
  padding?: string
  margin?: string
  rowWidth?: string
  rowHeight?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  isWrap?: boolean
}>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ isWrap }) => (isWrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '12px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ rowWidth }) => (rowWidth ? rowWidth : '100%')};
  height: ${({ rowHeight }) => (rowHeight ? rowHeight : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  border: ${({ border }) => (border ? border : 'none')};
`
export const FlexColumn = styled.div<{
  justifyContent?: TFlexAlignItems | TFlexJustifyContents
  alignItems?: TFlexJustifyContents
  gap?: string
  padding?: string
  margin?: string
  colWidth?: string
  colHeight?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}>`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
  gap: ${({ gap }) => (gap ? gap : '12px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ colWidth }) => (colWidth ? colWidth : '100%')};
  height: ${({ colHeight }) => (colHeight ? colHeight : 'auto')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  border: ${({ border }) => (border ? border : 'none')};

  // ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and ${themeBreakPoint.sm} {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and ${themeBreakPoint.md} {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and ${themeBreakPoint.lg} {
    ${({ lg }) => lg && getWidthString(lg)};
  }
  @media only screen and ${themeBreakPoint.sm} {
    ${({ xl }) => xl && getWidthString(xl)};
  }
`
export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 160px);
  margin: 0 auto;
  padding: 0;
`
export const TextWrapper = styled.span<{
  color?: keyof ThemeProps
  fontSize?: keyof typeof themeTypography | number
  fontWeight?: keyof typeof themeFontWeight
  fontFamily?: keyof typeof themeFontFamily
  lineHeight?: number | string
  opacity?: number
  textAlign?: string
  margin?: string
  letterSpacing?: string
}>`
  color: ${({ color, theme }) => (color ? (theme as any)[color] : theme.text1)};
  font-size: ${({ fontSize }) =>
    fontSize ? (typeof fontSize === 'number' ? `${fontSize}px` : themeTypography[fontSize]) : themeTypography.base};
  font-weight: ${({ fontWeight }) => (fontWeight ? themeFontWeight[fontWeight] : themeFontWeight.medium)};
  font-family: ${({ fontFamily }) => (fontFamily ? themeFontFamily[fontFamily] : themeFontFamily.main)};
  line-height: ${({ lineHeight }) => lineHeight ?? '30px'};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'start')};
  transition: ease-in-out 0.3s;
  margin: ${({ margin }) => (margin ? margin : '0px')};
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? letterSpacing : '1px')};
`
export const HoverTextWrapper = styled(TextWrapper)`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text5};
  }
`
export const GradientTextWrapper = styled(TextWrapper)`
  background: ${themeGradient.textGradient1};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`
export const BackwardTextWrapper = styled(TextWrapper)`
  transform: matrix(-1, 0, 0, 1, 0, 0);
`
export const MainButton = styled.button<{
  width?: string
  height?: string
  padding?: string
  color?: string
  hoverColor?: string
  borderRadius?: string
  backgroundColor?: string
  margin?: string
}>`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  font-size: ${themeTypography.sm};
  font-weight: ${themeFontWeight.semiBold};
  font-family: 'Poppins';
  line-height: 24px;
  text-align: center;
  padding: ${({ padding }) => padding ?? '0 24px'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '54px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : themeColor.button1)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.small)};

  &:hover {
    background: ${({ hoverColor }) => (hoverColor ? hoverColor : themeColor.buttonHover1)};
  }

  &:disabled {
    // color: ${({ theme }) => theme.buttonDisabled};
    background: ${({ theme }) => theme.buttonDisabled};
    cursor: default;
    pointer-events: none;
    opacity: 0.5;
  }

  @media only screen and (max-width: 900px) {
    font-size: ${themeTypography.base};
  }
`
export const TransparentButton = styled(MainButton)`
  color: ${({ color, theme }) => (color ? color : theme.text1)};
  background: transparent;
  outline: ${({ theme }) => `1px solid ${theme.text1}`};

  &:disabled {
    outline: none;
  }
`
export const GradientButton = styled(MainButton)<{ gradient?: string }>`
  background: ${({ gradient }) => gradient ?? themeGradient.buttonGradient};
`
export const CloseButton = styled(CgClose)`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`
export const CloseIconWrapper = styled(CloseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const InputWrapper = styled.input<{
  width?: string
  height?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  color?: keyof ThemeProps
  padding?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: number
}>`
  width: ${({ width }) => (width ? width : '100%')};
  min-width: ${({ width }) => (width ? width : '240px')};
  height: ${({ height }) => (height ? height : '50px')};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
  border: ${({ border, theme }) => (border ? border : theme.border1)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.regular)};
  padding: ${({ padding }) => (padding ? padding : '20px')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : themeTypography.base)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : themeFontWeight.regular)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : themeFontFamily.main)};
  color: ${({ color, theme }) => (color ? (theme as any)[color] : theme.text1)};
  outline: none;
`
export const ImageContainer = styled.img<{
  width?: string
  height?: string
  maxWidth?: string
  maxHeight?: string
  margin?: string
  objectFit?: string
  borderRadius?: string
  position?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
}>`
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : themeBorderRadius.none)};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : 'auto')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '100%')};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  object-fit: ${({ objectFit }) => (objectFit ? objectFit : 'cover')};
  position: ${({ position }) => (position ? position : 'unset')};
  top: ${({ top }) => (top ? top : 'unset')};
  left: ${({ left }) => (left ? left : 'unset')};
  right: ${({ right }) => (right ? right : 'unset')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'unset')};
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`
export const Divider = styled.div<{ width?: string; height?: string; margin?: string; backColor?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '2px')};
  background-color: ${({ backColor, theme }) => (backColor ? backColor : theme.divider)};
  margin: ${({ margin }) => (margin ? margin : '1rem 0')};
`
export const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 200vh;
  background-color: #000000;
  opacity: 0.7;
  z-index: 1;
`
export const BlurBackground = styled.div<{
  width?: string
  height?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  backgroundColor?: string
  blur?: string
  direction?: string
}>`
  position: absolute;
  width: ${({ width }) => width ?? '40%'};
  height: ${({ height }) => height ?? '30vh'};
  top: ${({ top }) => top ?? '-16vh'};
  left: ${({ left }) => left ?? '-10%'};
  right: ${({ right }) => right ?? 'unset'};
  bottom: ${({ bottom }) => bottom ?? 'unset'};
  border-radius: ${({ direction }) => (direction === 'left' ? '0 100% 100% 0' : direction === 'right' ? '100% 0 0 100%' : '100% 100% 0 0')};

  background-color: ${({ theme, backgroundColor }) => backgroundColor ?? theme.background5};
  filter: ${({ blur }) => `blur(${blur ?? '90px'})`};
`

export const ToastWrapper = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})``
