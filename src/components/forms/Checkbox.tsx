'use client';

import type { ChangeEventHandler, LabelHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../core/Icon';

export interface CheckboxProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** @default false */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
  /** Muted second line. */
  description?: string;
  /** @default false */
  disabled?: boolean;
}

/**
 * Square 17px checkbox filled navy when on. The site uses a checkmark list for its three claims.
 * Multi-select control and consent toggle.
 *
 * @example
 * <Checkbox checked label="Atendimento Personalizado." onChange={() => {}} />
 * <Checkbox label="Notificar por WhatsApp" description="Enviamos alertas de prazo fatal" />
 */
export function Checkbox({ checked = false, onChange, label, description, disabled = false, style, ...rest }: CheckboxProps) {
  return (
    <label style={{ display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span
        style={{
          width: 17, height: 17, flex: '0 0 auto', display: 'grid', placeItems: 'center', marginTop: description ? 2 : 0,
          borderRadius: 'var(--radius-xs)', color: 'var(--stone-0)',
          background: checked ? 'var(--navy-600)' : 'var(--stone-0)',
          border: `1px solid ${checked ? 'var(--navy-600)' : 'var(--border-default)'}`,
          transition: 'var(--transition-control)',
        }}
      >
        {checked && <Icon name="check" size={12} strokeWidth={3} />}
      </span>
      {label && (
        <span>
          <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)' }}>{label}</span>
          {description && <span style={{ display: 'block', font: 'var(--fw-light) var(--fs-caption)/1.5 var(--font-sans)', color: 'var(--text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
