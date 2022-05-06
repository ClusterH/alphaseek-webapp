import { isMobile, screenWidth } from 'utils'

import { ThemeProps } from './types'
export const themeColor: ThemeProps = {
  // background color
  background1: 'var(--cinder)',
  background2: 'var(--black)',
  background3: 'var(--dullOrange)',
  background4: 'var(--dullOrange)',

  // text color
  text1: 'var(--white)',
  text2: 'var(--osloGrey)',
  text3: 'var(--greyGoose)',
  text4: 'var(--silver)',
  text5: 'var(--reddishOrange)',

  //button color
  button1: 'var(--buttonColor1)',
  buttonHover1: 'var(--buttonHoverColor1)',
  buttonDisabled: 'var(--disable)',

  // border, divider color
  border1: '1px solid var(--blackCow)',
  divider: 'var(--divider)',
  // box-shadow
  boxShadow1: '0px 35px 50px var(--blackOpacity07)',
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
  main: 'Poppins',
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
  textGradient: 'linear-gradient(91.79deg, var(--white) 38.4%, rgba(255, 255, 255, 0) 102.58%);',
  bgGradient: 'linear-gradient(180deg, var(--dune) 0%, var(--cinder) 100%)',
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
