'use client';

import { useState, type InputHTMLAttributes } from 'react';
import { Icon } from '../core/Icon';
import { fieldBase } from './field-base';

export type InputType = 'text' | 'email' | 'tel' | 'search' | 'password' | 'date' | 'number';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** @default "text" */
  type?: InputType;
  /** Lucide icon name rendered inside, at the left. */
  icon?: string;
  /** @default false */
  invalid?: boolean;
  /** Sets the mono/tabular face — use for CNJ numbers and money. @default false */
  mono?: boolean;
  /** Error text shown below in red; also implies invalid styling when combined with `invalid`. */
  error?: string;
}

/**
 * Single-line text field, 40px tall (`--field-h`), 6px radius.
 * Text field for forms, search bars and case-number entry.
 *
 * @example
 * <Input icon="search" placeholder="Buscar processo, cliente ou número CNJ" />
 * <Input mono placeholder="0000000-00.0000.0.00.0000" />
 * <Input invalid error="Informe um e-mail válido" value="bruno@" />
 */
export function Input({ value, onChange, placeholder, type = 'text', icon, invalid = false, disabled = false, mono = false, error, id, style, ...rest }: InputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 11, display: 'flex', color: 'var(--text-muted)', pointerEvents: 'none' }}><Icon name={icon} size={16} /></span>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            ...fieldBase({ focus, invalid, disabled }), height: 'var(--field-h)',
            padding: icon ? '0 12px 0 34px' : '0 12px',
            fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
            fontVariantNumeric: mono ? 'tabular-nums' : undefined, ...style,
          }}
          {...rest}
        />
      </div>
      {error && <p style={{ marginTop: 6, font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--red-600)' }}>{error}</p>}
    </div>
  );
}
