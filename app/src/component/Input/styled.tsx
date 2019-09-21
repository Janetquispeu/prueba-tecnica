import styled from 'styled-components';
import { COLORS, FONTS } from '../../ui';

export const InputStyled = styled.input`
  background-color: '#fff';
  border: 1px solid;
  border-color: ${COLORS.SILVER};
  border-radius: 6px;
  color: ${COLORS.BLACK};
  display: block;
  font-family: ${FONTS.ROBOTO};
  font-size: 14px;
  height: 25px;
  line-height: 32px;
  outline: none;
  padding: 0 13px;
  width: 100%;
`