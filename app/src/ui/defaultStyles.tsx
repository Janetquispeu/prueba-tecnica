import { css } from 'styled-components';
import { FONTS, COLORS } from './variables';

export const defaultStyle = css`
  * {
    box-sizing: border-box;
    font-family: ${FONTS.ROBOTO}, 'sans-serif' !important;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${COLORS.GRAY};
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    overflow: auto !important;
    padding: 0 !important;
  }
`;