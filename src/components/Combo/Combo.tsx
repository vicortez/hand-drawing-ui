import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCombo as _WiredCombo } from 'wired-elements/lib/wired-combo.js';
import Item from '../Item';

interface ComboProps {
  defaultSelected?: string;
  options?: Array<{ value: string; content: string }>;
  onChange?: (value: string) => void;
}

const WiredComboComponent = createComponent({
  react: React,
  tagName: 'wired-combo',
  elementClass: _WiredCombo,
  events: {
    onChange: 'selected'
  }
});

export const Combo: React.FC<ComboProps> = ({ defaultSelected, options, onChange }) => {
  return (
    <WiredComboComponent id='combo' selected={defaultSelected} onChange={(e: Event) => {onChange?.((e as CustomEvent).detail.selected)}}>
      {options?.map((option) => (
        <Item key={option.value} value={option.value}>{option.content}</Item>
      ))}
    </WiredComboComponent>
  );
};
