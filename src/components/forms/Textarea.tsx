'use client';

import { useState, type TextareaHTMLAttributes } from 'react';
import { fieldBase } from './field-base';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** @default false */
  invalid?: boolean;
}

/**
 * Multi-line field. The site's contact form uses a 4-row textarea labelled "Mensagem".
 * Long-form input — case notes, "Mensagem" on the contact form.
 *
 * @example
 * <Textarea rows={5} placeholder="Descreva o ocorrido" />
 */
export function Textarea({ value, onChange, placeholder, rows = 4, invalid = false, disabled = false, id, style, ...rest }: TextareaProps) {
  const [focus, setFocus] = useState(false);
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      disabled={disabled}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{ ...fieldBase({ focus, invalid, disabled }), padding: '10px 12px', resize: 'vertical', lineHeight: 'var(--lh-body)', ...style }}
      {...rest}
    />
  );
}
