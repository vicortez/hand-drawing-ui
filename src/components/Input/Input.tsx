import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredInput as _WiredInput, WiredInput } from 'wired-elements/lib/wired-input';
import { FormEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  value?: string;
  width?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  name?: string;
  readonly?: boolean; 
  placeholder?: string;
  ref?: React.RefObject<WiredInput> | ((instance: WiredInput | null) => void);
  onClick?: () => void;
}

const InputComponent = createComponent({
  react: React,
  tagName: 'wired-input',
  elementClass: _WiredInput
});

const StyledInput = styled(InputComponent)<{ width?: string }>`
  width: ${({ width }) => width || '100%'};
`;

export const Input: React.FC<InputProps> = ({ 
  value, 
  onChange, 
  min, 
  max, 
  name, 
  readonly, 
  ref,
  onClick,
  placeholder,
  width
}) => {
  return <StyledInput 
    value={value} 
    min={min} 
    max={max} 
    name={name} 
    readonly={readonly} 
    onBlur={(event: FormEvent<WiredInput>) => { onChange?.((event.currentTarget as WiredInput).value) }} 
    ref={ref}
    onClick={onClick}
    placeholder={placeholder}
    width={width}
  />;
};
