import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredInput as _WiredInput, WiredInput } from 'wired-elements/lib/wired-input';
import { FormEvent } from 'react';

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  name?: string;
  readonly?: boolean; 
  ref?: React.LegacyRef<WiredInput>;
}

const InputComponent = createComponent({
  react: React,
  tagName: 'wired-input',
  elementClass: _WiredInput
});

export const Input: React.FC<InputProps> = ({ value, onChange, min, max, name, readonly, ref }) => {
  return <InputComponent 
    value={value} 
    min={min} 
    max={max} 
    name={name} 
    readonly={readonly} 
    onBlur={(event: FormEvent<WiredInput>) => { onChange?.((event.currentTarget as WiredInput).value) }} 
    ref={ref}
  />;
};
