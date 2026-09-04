'use client';

import type { ChangeEventHandler, LabelHTMLAttributes, ReactNode } from 'react';

export interface RadioProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** @default false */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
  name?: string;
  value?: string;
  /** @default false */
  disabled?: boolean;
}

/**
 * Single-choice control. Group 2–4 options; beyond that use {@link Select}.
 * Mutually exclusive choice, 2–4 options.
 *
 * @example
 * <Radio name="instancia" value="1" checked label="1ª instância" onChange={() => {}} />
 * <Radio name="instancia" value="2" label="2ª instância" onChange={() => {}} />
 */
export function Radio({ checked = false, onChange, label, name, value, disabled = false, style, ...rest }: RadioProps) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        style={{
          width: 17, height: 17, flex: '0 0 auto', display: 'grid', placeItems: 'center', borderRadius: '50%',
          background: 'var(--stone-0)', border: `1px solid ${checked ? 'var(--navy-600)' : 'var(--border-default)'}`,
          transition: 'var(--transition-control)',
        }}
      >
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--navy-600)' }} />}
      </span>
      {label && <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)' }}>{label}</span>}
    </label>
  );
}
