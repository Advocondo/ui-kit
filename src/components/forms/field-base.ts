import type { CSSProperties } from 'react';

export interface FieldState {
  focus: boolean;
  invalid: boolean;
  disabled: boolean;
}

/** Shared field chrome for Input, Select and Textarea — border/background/shadow by state. */
export function fieldBase({ focus, invalid, disabled }: FieldState): CSSProperties {
  return {
    width: '100%', font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
    color: 'var(--text-heading)', background: 'var(--stone-0)',
    border: `1px solid ${invalid ? 'var(--red-600)' : focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
    borderRadius: 'var(--radius-sm)', outline: 'none',
    boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
    transition: 'var(--transition-control)', opacity: disabled ? 0.45 : 1,
  };
}
