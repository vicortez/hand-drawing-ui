import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredImage as _WiredImage } from 'wired-elements/lib/wired-image.js';

interface ImageProps {
  src: string;
  elevation?: number;
  onClick?: () => void;
}

const ImageComponent = createComponent({
  react: React,
  tagName: 'wired-image',
  elementClass: _WiredImage,
  events: {
    onclick: 'click'
  }
});

export const Image: React.FC<ImageProps> = ({ src, elevation = 1, onClick }) => {
  return <ImageComponent src={src} elevation={elevation} onClick={onClick} />;
};
