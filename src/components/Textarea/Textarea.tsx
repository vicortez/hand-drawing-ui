import * as React from 'react';
import { createComponent } from '@lit/react';
import { WiredTextarea as _WiredTextarea } from 'wired-elements/lib/wired-textarea.js';

interface TextareaProps {
  value?: string;
  readonly?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Textarea = ({ value, readonly, placeholder = 'Enter text here...', onChange }: TextareaProps) => (
  <TextareaComponent 
    value={value} 
    readonly={readonly}
    placeholder={placeholder}
    onBlur={(event: React.FormEvent<_WiredTextarea>) => onChange?.(event.currentTarget.value)} 
  />
);

const TextareaComponent = createComponent({
  react: React,
  tagName: 'wired-textarea',
  elementClass: _WiredTextarea
});
  