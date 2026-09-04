import React from 'react';

export function FieldLabel({ children, htmlFor, required = false, hint, style, ...rest }) {
  return (
    <label htmlFor={htmlFor} style={{
      display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 'var(--space-2)',
      font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)', color: 'var(--text-heading)', ...style
    }} {...rest}>
      {children}{required && <span style={{ color: 'var(--red-600)' }}>*</span>}
      {hint && <span style={{ font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
