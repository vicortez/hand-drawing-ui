import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredRadio as _WiredRadio } from 'wired-elements/lib/wired-radio.js';

interface RadioProps {
  checked?: boolean;
  name?: string;
}

const RadioComponent = createComponent({
  react: React,
  tagName: 'wired-radio',
  elementClass: _WiredRadio
});

export const Radio = ({ checked, name }: RadioProps) => (
  <RadioComponent checked={checked} name={name} />
);