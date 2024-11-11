import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredCard as _WiredCard } from 'wired-elements/lib/wired-card.js';

interface CardProps {
  children: React.ReactNode;
  elevation?: number;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const CardComponent = createComponent({
  react: React,
  tagName: 'wired-card',
  elementClass: _WiredCard,
  events: {
    onClick: 'click'
  }
});

export const Card: React.FC<CardProps> = ({ children, elevation, onClick, width, height }) => {
  return <CardComponent elevation={elevation} onClick={onClick} style={{ width, height }}>{children}</CardComponent>;
};
