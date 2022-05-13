import { createGlobalStyle, withTheme } from 'styled-components'

import { themeFontFamily } from './theme'
import { GlobalThemeProps } from './types'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #1d2427;
    --blue: #4597de;
    --lightBlue: #2081e2;
    --reddishOrange: #f7531d;
    --dullOrange: #e07d44;
    --osloGrey: #8a8a8e;
    --dune: #323232;
    --cinder: #151515;
    --greyGoose: #d2d2d2;
    --silver: #c7c7c7;
    --darkGrey: #3c3c3c;
    --darkGrey2: #3b3b3b;
    --blackCow: #464646;
    --heavyGrey: #212121;
    --divider: #595959;
    --borderColor: #383d45;
    --borderColor2: #ccb4e9;
    --inputBGColor: #383d4526;
    --boxBGColor: #2a3039;
    --buttonColor1: #e07d44;
    --buttonHoverColor1: #4597de;
    --success: #14ae5c;
    --error: #ff7b7b;
    --disable: #808080;
    --scrollbarTrack: #c4c4c4;
    --scrollbarThumb: #3c3c3c;

    // toastify style
    --toastify-font-family: ${themeFontFamily.main};
    --toastify-toast-width: fit-content;
  }

  body {
    background-repeat: repeat;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background1};
    background-size: cover;
    color: ${({ theme }: GlobalThemeProps) => theme.text1};
    font-family: 'Poppins' !important;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;
    opacity: 1;
    z-index: -1;
    transition: background-color 300ms ease-in-out 0s, opacity 800ms ease-in-out 0s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    input, select, textarea, button { font-family: inherit; }
  }

  /* For Chrome */
  /* width */
  ::-webkit-scrollbar {
    @media all and (min-width: 990px) {
      width: 4px;
      height: 2px;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--scrollbarTrack);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbarThumb);
    height: 24px;
    width: 24px;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--violet);
  }
`

export const gradient = {
  normal: 'linear-gradient(var(--yellow1), var(--yellow3))',
  hover: 'linear-gradient(var(--yellow2), var(--yellow3))',
  active: 'linear-gradient(var(--yellow3), var(--yellow2))',
}

export default withTheme(GlobalStyles)
