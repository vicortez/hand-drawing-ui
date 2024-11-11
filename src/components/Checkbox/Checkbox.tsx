import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCheckbox as _WiredCheckbox } from 'wired-elements/lib/wired-checkbox.js';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxComponent = createComponent({
  react: React,
  tagName: 'wired-checkbox',
  elementClass: _WiredCheckbox,
  events: {
    onChange: 'change'
  }
});

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return <CheckboxComponent checked={checked} onChange={(e: Event) => onChange?.((e as CustomEvent).detail.checked)}  />;
};
