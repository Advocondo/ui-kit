import React from 'react';

export function SectionTitle({ children, sub, align = 'center', size = 'md', onNavy = true, sentenceCase = false, style, ...rest }) {
  const fs = { sm: 'var(--fs-h1)', md: 'var(--fs-display-3)', lg: 'var(--fs-display-2)' }[size];
  return (
    <div style={{ textAlign: align, display: 'grid', justifyItems: align === 'center' ? 'center' : 'start', gap: 'var(--space-4)', ...style }} {...rest}>
      <h2 style={{
        font: 'var(--fw-bold) ' + fs + '/var(--lh-heading) var(--font-display)',
        textTransform: sentenceCase ? 'none' : 'uppercase',
        letterSpacing: sentenceCase ? '0' : 'var(--ls-heading)',
        color: onNavy ? 'var(--text-on-inverse)' : 'var(--text-heading)'
      }}>{children}</h2>
      {sub && <p style={{ maxWidth: '62ch', font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: onNavy ? 'var(--text-on-inverse-muted)' : 'var(--text-body)' }}>{sub}</p>}
    </div>
  );
}
