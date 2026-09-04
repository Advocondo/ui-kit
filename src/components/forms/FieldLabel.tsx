'use client';

import type { LabelHTMLAttributes, ReactNode } from 'react';

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Appends a red asterisk. @default false */
  required?: boolean;
  /** Muted trailing hint, e.g. "opcional". */
  hint?: string;
}

/**
 * Field label with the brand's required marker (a red asterisk, as on the site's contact form).
 * Matches the site's "Nome e Sobrenome *" pattern.
 *
 * @example
 * <FieldLabel htmlFor="tel" required>Telefone</FieldLabel>
 */
export function FieldLabel({ children, htmlFor, required = false, hint, style, ...rest }: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 'var(--space-2)', font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)', color: 'var(--text-heading)', ...style }}
      {...rest}
    >
      {children}
      {required && <span style={{ color: 'var(--red-600)' }}>*</span>}
      {hint && <span style={{ font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
