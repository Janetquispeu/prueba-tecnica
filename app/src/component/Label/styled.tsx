import styled from 'styled-components';
import { FONTS, COLORS } from '../../ui';

export const LabelStyle = styled.label`
  color: ${COLORS.LEAD};
  display: block;
  font-family: ${FONTS.ROBOTO};
  font-size: ${(props) => `${props.fontSize}px`};
  font-style: ${(props) => props.fontStyle};
  line-height: ${(props) => `${props.lineHeight}px`};
  margin-bottom: 5px;
`;

export const SymbolRequired = styled.span`
  &:before {
    color: red;
    content: "*";
    margin-right: 4px;
  }
`;