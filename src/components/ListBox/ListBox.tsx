import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredListbox as _WiredListbox } from 'wired-elements/lib/wired-listbox.js';
import { Item } from '../Item/Item';
import styled from 'styled-components';

interface ListboxValue {
  text: string;
  value: string;
}

interface ListBoxProps {
  selected?: string;
  width?: string;
  options: ListboxValue[];
  value?: ListboxValue;
  onChange?: (value: string) => void;
}

const ListBoxComponent = createComponent({
  react: React,
  tagName: 'wired-listbox',
  elementClass: _WiredListbox,
  events: {
    onChange: 'selected'
  }
});

const StyledListBox = styled(ListBoxComponent)<{ width?: string }>`
  width: ${(props) => props.width ?? '100%'};
`;

export const ListBox = ({ width, options, value, onChange, selected }: ListBoxProps) => (
  <StyledListBox width={width} value={value} selected={selected} onChange={(event) => { onChange?.((event as unknown as CustomEvent).detail.selected) }}>
    {options.map((option) => (
      <Item key={option.value} value={option.value}>{option.text}</Item>
    ))}
  </StyledListBox>
);
