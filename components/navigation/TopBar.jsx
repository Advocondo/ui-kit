import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function TopBar({ title, subtitle, breadcrumb, actions, tone = 'light', style, ...rest }) {
  const inverse = tone === 'navy';
  return (
    <header style={{
      minHeight: 'var(--app-topbar-h)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
      padding: '0 var(--app-pad)',
      background: inverse ? 'var(--surface-brand)' : 'var(--surface-card)',
      borderBottom: '1px solid ' + (inverse ? 'transparent' : 'var(--border-subtle)'), ...style
    }} {...rest}>
      <div style={{ minWidth: 0, flex: 1 }}>
        {breadcrumb}
        <h1 style={{ font: 'var(--fw-semibold) var(--fs-h2)/1.25 var(--font-sans)', color: inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>
        {subtitle && <p style={{ marginTop: 2, font: 'var(--fw-light) var(--fs-body-sm)/1.5 var(--font-sans)', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>{actions}</div>}
    </header>
  );
}

export function TopBarSearch({ placeholder = 'Buscar', value, onChange, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: 300, ...style }}>
      <span style={{ position: 'absolute', left: 11, display: 'flex', color: 'var(--text-muted)' }}><Icon name="search" size={16} /></span>
      <input value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', height: 'var(--control-h-md)', padding: '0 12px 0 34px',
          font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)',
          background: 'var(--stone-0)', border: '1px solid ' + (focus ? 'var(--border-focus)' : 'var(--border-default)'),
          borderRadius: 'var(--radius-sm)', outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none',
          transition: 'var(--transition-control)'
        }} />
    </div>
  );
}
