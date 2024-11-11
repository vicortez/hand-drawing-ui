import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredProgress as _WiredProgress } from 'wired-elements/lib/wired-progress.js';

interface ProgressProps {
  value?: number;
  min?: number;
  max?: number;
  percentage?: boolean;
}

export const Progress = ({ value, min, max, percentage }: ProgressProps) => (
  <ProgressComponent value={value} min={min} max={max} percentage={percentage} />
);

const ProgressComponent = createComponent({
  react: React,
  tagName: 'wired-progress',
  elementClass: _WiredProgress
});
