import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredItem as _WiredItem } from 'wired-elements/lib/wired-item.js';
import styled from 'styled-components';

interface ItemProps {
  children?: React.ReactNode;
  selected?: boolean;
  value?: string;
}

const WiredItemComponent = createComponent({
  react: React,
  tagName: 'wired-item',
  elementClass: _WiredItem
});

const StyledItem = styled(WiredItemComponent)`
  --wired-item-selected-color: #f90;

  opacity: 1;

  .button.selected {
    color: var(--wired-item-selected-color);
  }
`;

export const Item: React.FC<ItemProps> = ({ selected, children, value }) => (
  <StyledItem selected={selected} value={value}>
    {children}
  </StyledItem>
);
