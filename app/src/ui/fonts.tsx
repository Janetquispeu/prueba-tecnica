import { css } from 'styled-components';
import * as robotoTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';

export const styledFonts = css`
  @font-face{
    font-family: "Roboto";
    src: url(${robotoTtf});
  }
`;