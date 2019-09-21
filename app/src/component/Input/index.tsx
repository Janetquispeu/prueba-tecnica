import * as React from 'react';
import { InputStyled } from './styled';

interface Props {
  id: string;
  value: string;
  error: any;
  onChange: Function;
  onBlur: Function;
  placeholder?: string;
}

export const Input = ({id,value, error, onChange, onBlur, placeholder}: Props) => {
  return (
    <InputStyled 
      id={id}
      type="text"
      value={value}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
};
