import { css } from 'styled-components';
import * as robotoTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import * as robotoWoff from '../assets/fonts/Roboto/Roboto-Regular.woff';

export const styledFonts = css`
  @font-face{
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url(${robotoTtf}),
      url(${robotoWoff}) format('woff');
  }
`;