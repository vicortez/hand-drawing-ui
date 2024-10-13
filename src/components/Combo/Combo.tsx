import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCombo as _WiredCombo } from 'wired-elements/lib/wired-combo.js';
import Item from '../Item';

type ComboProps = React.HTMLAttributes<_WiredCombo> & {
  defaultSelected?: string;
  options?: Array<{ value: string; content: string }>;
}

const WiredComboComponent = createComponent({
  react: React,
  tagName: 'wired-combo',
  elementClass: _WiredCombo,
});

export const Combo: React.FC<ComboProps> = ({ defaultSelected, options, ...props }) => {
  return (
    <WiredComboComponent selected={defaultSelected} {...props}>
      {options?.map((option) => (
        <Item key={option.value}>{option.content}</Item>
      ))}
    </WiredComboComponent>
  );
};
