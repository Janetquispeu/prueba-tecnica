import styled from 'styled-components';
import { FONTS, COLORS } from '../../ui';

export const ErrorStyle = styled.div`
  color: ${COLORS.ERROR_BORDER};
  display: block;
  font-family: ${FONTS.ROBOTO};
  font-size: 10px;
  position: absolute;
  bottom: 2px;
  left: 2px;
`;