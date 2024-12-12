import { createGlobalStyle } from 'styled-components';
import { styledFonts } from './fonts';
import { defaultStyle } from './defaultStyles';

export const GlobalStyle = createGlobalStyle`
  ${defaultStyle}
  ${styledFonts}
`;