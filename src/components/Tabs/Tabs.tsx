import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredTabs as _WiredTabs } from 'wired-elements/lib/wired-tabs.js';

interface TabsProps {
  selected?: string;
  onChange?: (selected: string) => void;
}

export const Tabs = ({ selected, onChange }: TabsProps) => (
  <TabsComponent 
    selected={selected} 
    onChange={(event) => onChange?.((event as unknown as CustomEvent).detail)} 
  />
);

const TabsComponent = createComponent({
  react: React,
  tagName: 'wired-tabs',
  elementClass: _WiredTabs
});
