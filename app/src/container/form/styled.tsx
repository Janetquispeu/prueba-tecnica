import styled from 'styled-components';
import { COLORS } from '../../ui';

export const FieldStyle = styled.div`
  padding: 15px 0;
  position: relative;
`

export const FormStyle = styled.form`
  width: 300px;
`
export const WrapperStyle = styled.div`
  display: flex;
  justify-content: center;
`
export const ButtonStyle = styled.button`
  background: ${COLORS.BLUE};
  border-radius: 5px;
  color: #fafafa;
  float: right;
  height: 35px;
  margin: 15px 0;
  width: 100px;
`