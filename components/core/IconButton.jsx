import React from 'react';
import { Icon } from './Icon.jsx';

const S = { sm: 28, md: 34, lg: 40 };

export function IconButton({ icon, label, size = 'md', variant = 'ghost', active = false, disabled = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const onNavy = variant === 'inverse';
  const base = onNavy
    ? { color: active ? 'var(--stone-0)' : 'var(--text-on-inverse-muted)', background: active ? 'rgba(255,255,255,.12)' : 'transparent' }
    : { color: active ? 'var(--navy-600)' : 'var(--text-body)', background: active ? 'var(--surface-selected)' : 'transparent' };
  const hov = onNavy ? { color: 'var(--stone-0)', background: 'rgba(255,255,255,.12)' } : { color: 'var(--navy-600)', background: 'var(--surface-hover)' };
  return (
    <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: S[size], height: S[size], display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid transparent', borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'var(--transition-control)',
        ...base, ...(hover && !disabled ? hov : null), ...style
      }} {...rest}>
      <Icon name={icon} size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} />
    </button>
  );
}
