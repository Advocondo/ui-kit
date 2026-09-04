'use client';

import { useState, type SelectHTMLAttributes } from 'react';
import { Icon } from '../core/Icon';
import { fieldBase } from './field-base';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  /** Empty first option, e.g. "Todos os status". */
  placeholder?: string;
  /** @default false */
  invalid?: boolean;
}

/**
 * Native select styled to match {@link Input}, with a Lucide chevron.
 * Dropdown for filters and enumerated fields.
 *
 * @example
 * <Select placeholder="Todas as áreas" options={['Condominial', 'Imobiliário', 'Civil', 'Consumidor', 'Família e Sucessões']} />
 */
export function Select({ value, onChange, options = [], placeholder, invalid = false, disabled = false, id, style, ...rest }: SelectProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ ...fieldBase({ focus, invalid, disabled }), height: 'var(--field-h)', padding: '0 34px 0 12px', appearance: 'none', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => {
          const opt = typeof o === 'string' ? { value: o, label: o } : o;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
      <span style={{ position: 'absolute', right: 11, display: 'flex', color: 'var(--text-muted)', pointerEvents: 'none' }}><Icon name="chevron-down" size={16} /></span>
    </div>
  );
}
