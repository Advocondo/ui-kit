import React from 'react';

export function Switch({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }} {...rest}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{
        width: 36, height: 20, flex: '0 0 auto', borderRadius: 'var(--radius-pill)', padding: 2,
        background: checked ? 'var(--navy-600)' : 'var(--stone-300)', transition: 'var(--transition-control)'
      }}>
        <span style={{ display: 'block', width: 16, height: 16, borderRadius: '50%', background: 'var(--stone-0)', boxShadow: 'var(--shadow-xs)', transform: checked ? 'translateX(16px)' : 'none', transition: 'transform var(--dur-fast) var(--ease-standard)' }} />
      </span>
      {label && <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)' }}>{label}</span>}
    </label>
  );
}
