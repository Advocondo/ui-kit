import React from 'react';
import { Icon } from './Icon.jsx';

const H = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
const PAD = { sm: '0 12px', md: '0 18px', lg: '0 26px' };
const FS = { sm: 'var(--fs-caption)', md: 'var(--fs-body-sm)', lg: 'var(--fs-body)' };

const VARIANTS = {
  primary:   { background: 'var(--navy-600)', color: 'var(--text-on-brand)', border: '1px solid var(--navy-600)' },
  secondary: { background: 'var(--stone-0)', color: 'var(--navy-600)', border: '1px solid var(--border-default)' },
  outline:   { background: 'transparent', color: 'var(--stone-0)', border: '1px solid var(--stone-0)' },
  ghost:     { background: 'transparent', color: 'var(--text-brand)', border: '1px solid transparent' },
  danger:    { background: 'var(--red-600)', color: 'var(--stone-0)', border: '1px solid var(--red-600)' }
};
const HOVER = {
  primary:   { background: 'var(--navy-700)', borderColor: 'var(--navy-700)' },
  secondary: { background: 'var(--stone-100)', borderColor: 'var(--stone-400)' },
  outline:   { background: 'var(--stone-0)', color: 'var(--navy-900)' },
  ghost:     { background: 'var(--surface-brand-subtle)' },
  danger:    { background: 'var(--red-700)', borderColor: 'var(--red-700)' }
};

export function Button({
  children, variant = 'primary', size = 'md', icon, iconEnd, block = false,
  disabled = false, loading = false, type = 'button', onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isOff = disabled || loading;
  return (
    <button type={type} disabled={isOff} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
        height: H[size], padding: PAD[size], fontSize: FS[size],
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-medium)', letterSpacing: '.01em',
        borderRadius: 'var(--radius-sm)', cursor: isOff ? 'not-allowed' : 'pointer',
        opacity: isOff ? 0.45 : 1, whiteSpace: 'nowrap',
        transition: 'var(--transition-control), transform var(--dur-instant) var(--ease-standard)',
        transform: press && !isOff ? 'translateY(1px)' : 'none',
        ...v, ...(hover && !isOff ? HOVER[variant] : null), ...style
      }} {...rest}>
      {loading ? <Icon name="loader-circle" size={size === 'sm' ? 14 : 16} /> : icon ? <Icon name={icon} size={size === 'sm' ? 14 : 16} /> : null}
      {children}
      {iconEnd ? <Icon name={iconEnd} size={size === 'sm' ? 14 : 16} /> : null}
    </button>
  );
}
