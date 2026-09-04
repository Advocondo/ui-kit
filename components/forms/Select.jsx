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

export function Select({ value, onChange, options = [], placeholder, invalid = false, disabled = false, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
      <select id={id} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ ...fieldBase({ focus, invalid, disabled }), height: 'var(--field-h)', padding: '0 34px 0 12px', appearance: 'none', cursor: disabled ? 'not-allowed' : 'pointer', ...style }} {...rest}>
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
