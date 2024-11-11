import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredDivider as _WiredDivider } from 'wired-elements/lib/wired-divider.js';

const DividerComponent = createComponent({
  react: React,
  tagName: 'wired-divider',
  elementClass: _WiredDivider
});
  
export const Divider: React.FC = () => {
  return <DividerComponent />;
};
