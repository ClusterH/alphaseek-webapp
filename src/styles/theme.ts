import { isMobile, screenWidth } from 'utils'

import { ThemeProps } from './types'
export const themeColor: ThemeProps = {
  // background color
  background1: 'var(--cinder)',
  background2: 'var(--black)',
  background3: 'var(--dullOrange)',
  background4: 'var(--dullOrange)',
  background5: 'var(--heavyGrey)',

  // text color
  text1: 'var(--white)',
  text2: 'var(--osloGrey)',
  text3: 'var(--greyGoose)',
  text4: 'var(--silver)',
  text5: 'var(--reddishOrange)',
  text6: 'var(--darkGrey2)',

  //status color
  success: 'var(--success)',
  error: 'var(--error)',

  //button color
  button1: 'var(--buttonColor1)',
  buttonHover1: 'var(--buttonHoverColor1)',
  buttonDisabled: 'var(--disable)',

  // border, divider color
  border1: '1px solid var(--blackCow)',
  divider: 'var(--divider)',
  // box-shadow
  boxShadow1: '0px 35px 50px var(--blackOpacity07)',
  boxShadow2: '0px 4px 8px rgba(0, 0, 0, 0.25)',
  dropShadow1: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  dropShadow2: 'drop-shadow(0px 30px 50px rgba(0, 0, 0, 0.65))',
  dropShadow3: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.05))',
}

export const themeTypography = {
  xs: isMobile ? '1vmax' : screenWidth > 1440 ? '12px' : '0.8vmax',
  sm: isMobile ? '1.3vmax' : screenWidth > 1440 ? '16px' : '1.1vmax',
  base: isMobile ? '1.5vmax' : screenWidth > 1440 ? '20px' : '1.3vmax',
  lg: isMobile ? '1.7vmax' : screenWidth > 1440 ? '22px' : '1.5vmax',
  xl: isMobile ? '1.8vmax' : screenWidth > 1440 ? '24px' : '1.6vmax',
  xxl: isMobile ? '2.4vmax' : screenWidth > 1440 ? '32px' : '2.2vmax',
  xxxl: isMobile ? '3.5vmax' : screenWidth > 1440 ? '52px' : '3.3vmax',
  extra: isMobile ? '3.8vmax' : screenWidth > 1440 ? '80px' : '3.6vmax',
}

// export const themeTypography = {
//   xs: '12px',
//   sm: '16px',
//   base: '20px',
//   lg: '22px',
//   xl: '24px',
//   xxl: '32px',
//   xxxl: '52px',
//   extra: '80px',
// }

export const themeFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

export const themeFontFamily = {
  title: 'SFPro',
  main: 'SFPro',
}

export const themeBorderRadius = {
  none: '0',
  small: '12px',
  regular: '24px',
  medium: '32px',
  circle: '50%',
}

export const themeGradient = {
  buttonGradient: 'linear-gradient(234.14deg, var(--neonBlue) 5.28%, var(--purple) 91.61%)',
  textGradient1: 'linear-gradient(91.79deg, var(--white) 38.4%, rgba(255, 255, 255, 0) 102.58%);',
  textGradient2: 'linear-gradient(90.64deg, #FAE98B -2.3%, #F7A668 117.54%)',
  bgGradient1: 'linear-gradient(180deg, #212121 0%, #232323 100%)',
  bgGradient2: 'linear-gradient(180deg, var(--dune) 0%, var(--cinder) 100%)',
  bgGradient3: 'linear-gradient(124.64deg, #FBF08F 7.13%, #F79962 105.25%)',
}

export const themeSize = {
  xs: '576px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1440px',
}

export const themeBreakPoint = {
  xs: `(min-width: ${themeSize.xs})`,
  sm: `(min-width: ${themeSize.sm})`,
  md: `(min-width: ${themeSize.md})`,
  lg: `(min-width: ${themeSize.lg})`,
  xl: `(min-width: ${themeSize.xl})`,
}
