import React from 'react';
import { Icon } from '../core/Icon.jsx';

const fieldBase = (state) => ({
  width: '100%', font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
  color: 'var(--text-heading)', background: 'var(--stone-0)',
  border: '1px solid ' + (state.invalid ? 'var(--red-600)' : state.focus ? 'var(--border-focus)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)', outline: 'none',
  boxShadow: state.focus ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
  transition: 'var(--transition-control)', opacity: state.disabled ? 0.45 : 1
});

export function Input({ value, onChange, placeholder, type = 'text', icon, invalid = false, disabled = false, mono = false, error, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 11, display: 'flex', color: 'var(--text-muted)', pointerEvents: 'none' }}><Icon name={icon} size={16} /></span>}
        <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            ...fieldBase({ focus, invalid, disabled }), height: 'var(--field-h)',
            padding: icon ? '0 12px 0 34px' : '0 12px',
            fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)',
            fontVariantNumeric: mono ? 'tabular-nums' : undefined, ...style
          }} {...rest} />
      </div>
      {error && <p style={{ marginTop: 6, font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--red-600)' }}>{error}</p>}
    </div>
  );
}
