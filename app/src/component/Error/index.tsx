import * as React from 'react';
import { ErrorStyle } from './styled';

export const Error = ({text}) => (
  <ErrorStyle>
    {text}
  </ErrorStyle>
);