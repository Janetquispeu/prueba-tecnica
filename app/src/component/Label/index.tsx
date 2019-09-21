import * as React from 'react';
import { SymbolRequired, LabelStyle } from './styled';

interface Props {
  text: string;
  required?: boolean;
}

export const Label = ({ text, required}:Props) => (
  <LabelStyle>
    {required && <SymbolRequired />}
    {text}
  </LabelStyle>
);