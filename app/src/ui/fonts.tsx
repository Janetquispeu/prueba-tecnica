import { css } from 'styled-components';
import * as robotoTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';
// import * as robotoWoff from '../assets/fonts/Roboto/Roboto-Regular.woff';
// import * as robotoItalicTtf from '../assets/fonts/Roboto/Roboto-Italic.ttf';
// import * as robotoItalicWoff from '../assets/fonts/Roboto/Roboto-Italic.woff';
// import * as robotoMediumTtf from '../assets/fonts/Roboto/Roboto-Medium.ttf';
// import * as robotoMediumWoff from '../assets/fonts/Roboto/Roboto-Medium.woff';

export const styledFonts = css`
  @font-face{
    font-family: "Roboto";
    src: url(${robotoTtf});
  }
`;