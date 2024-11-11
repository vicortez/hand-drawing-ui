import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredSlider as _WiredSlider } from 'wired-elements/lib/wired-slider.js';
interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export const Slider = ({ value, min, max, onChange }: SliderProps) => (
  <SliderComponent 
    value={value} 
    min={min} 
    max={max} 
    onChange={(event) => onChange?.((event as unknown as CustomEvent).detail)} 
  />
);

const SliderComponent = createComponent({
  react: React,
  tagName: 'wired-slider',
  elementClass: _WiredSlider,
  events: {
    onChange: 'change'
  }
});
