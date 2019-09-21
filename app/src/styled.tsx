import styled from 'styled-components';

export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 10px;
  position: relative;
  * {
    box-sizing: border-box
  }
  @media (max-width: 769px) {
    padding:0;
  }
`;