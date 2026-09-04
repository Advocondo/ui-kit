import React from 'react';

export function Card({ children, tone = 'default', padding = 'md', title, action, interactive = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const TONE = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', color: 'var(--text-body)' },
    sunken:  { background: 'var(--surface-sunken)', border: '1px solid transparent', boxShadow: 'none', color: 'var(--text-body)' },
    onNavy:  { background: 'var(--stone-200)', border: 'none', boxShadow: 'var(--shadow-card-site)', color: 'var(--navy-900)' },
    inverse: { background: 'var(--surface-inverse-raised)', border: '1px solid var(--border-inverse)', boxShadow: 'none', color: 'var(--text-on-inverse)' }
  }[tone];
  const P = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' }[padding];
  const headerPad = padding === 'none' ? 'var(--space-5) var(--space-5) var(--space-4)' : '0';
  return (
    <section onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: tone === 'onNavy' ? 'var(--radius-md)' : 'var(--radius-sm)', padding: P, overflow: 'hidden',
        transition: 'var(--transition-control)', cursor: interactive ? 'pointer' : undefined,
        ...TONE, ...(interactive && hover ? { boxShadow: 'var(--shadow-md)', borderColor: 'var(--navy-200)' } : null), ...style
      }} {...rest}>
      {(title || action) && (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', padding: headerPad, marginBottom: padding === 'none' ? 0 : 'var(--space-4)' }}>
          <h3 style={{ font: 'var(--fw-semibold) var(--fs-h3)/1.3 var(--font-sans)', color: 'inherit', margin: 0 }}>{title}</h3>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
