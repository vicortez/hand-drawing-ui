import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredItem as _WiredItem } from 'wired-elements/lib/wired-item.js';
import styled from 'styled-components';

interface ItemProps {
  children?: React.ReactNode;
  selected?: boolean;
  value?: string;
  onClick?: () => void;
  borderBottom?: string;
}

const WiredItemComponent = createComponent({
  react: React,
  tagName: 'wired-item',
  elementClass: _WiredItem
});

const StyledItem = styled(WiredItemComponent)<{ borderBottom?: string }>`
  --wired-item-selected-color: #f90;
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};

  opacity: 1;

  .button.selected {
    color: var(--wired-item-selected-color);
  }
`;

export const Item: React.FC<ItemProps> = ({ selected, children, value, onClick, borderBottom }) => (
  <StyledItem selected={selected} value={value} onClick={onClick} borderBottom={borderBottom}>
    {children}
  </StyledItem>
);
