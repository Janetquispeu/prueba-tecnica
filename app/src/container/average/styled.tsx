import styled from 'styled-components';
import { FONTS, COLORS } from '../../ui';

export const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;f
  font-family: ${FONTS.ROBOTO};
  justify-content: center;
`;

export const ContentTable = styled.div`
  width: 800px;
`;

export const TableHeader = styled.div`
  border: 1px solid ${COLORS.BLACK}
  color: ${COLORS.SILVER};
  display: flex;
  font-family: ${FONTS.ROBOTO};
  font-size: 14px;
  justify-content: space-around;
`
export const TableBody = styled.div`
  display: flex;
  color: ${COLORS.BLACK};
  font-family: ${FONTS.ROBOTO};
  font-size: 14px;
  justify-content: space-around;
`

export const Col = styled.div`
  padding: 10px;
  width: '20%';
`

export const ButtonStyle = styled.a`
  background: ${COLORS.BLUE};
  border-radius: 5px;
  color: #fafafa;
  float: right;
  height: 35px;
  line-height: 35px;
  margin: 15px;
  text-align: center;
  text-decoration: none;
  width: 100px;
`
