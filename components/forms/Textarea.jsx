import React from 'react';

const fieldBase = (state) => ({
  width: '100%', font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
  color: 'var(--text-heading)', background: 'var(--stone-0)',
  border: '1px solid ' + (state.invalid ? 'var(--red-600)' : state.focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)', outline: 'none',
  boxShadow: state.focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
  transition: 'var(--transition-control)', opacity: state.disabled ? 0.45 : 1
});

export function Textarea({ value, onChange, placeholder, rows = 4, invalid = false, disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea id={id} value={value} onChange={onChange} placeholder={placeholder} rows={rows} disabled={disabled}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
      style={{ ...fieldBase({ focus, invalid, disabled }), padding: '10px 12px', resize: 'vertical', lineHeight: 'var(--lh-body)', ...style }} {...rest} />
  );
}
