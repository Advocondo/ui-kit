import React from 'react';

const TONE = {
  neutral: { color: 'var(--status-neutral-fg)', background: 'var(--status-neutral-bg)', borderColor: 'var(--status-neutral-border)' },
  brand:   { color: 'var(--navy-600)', background: 'var(--navy-50)', borderColor: 'var(--navy-200)' },
  ok:      { color: 'var(--status-ok-fg)', background: 'var(--status-ok-bg)', borderColor: 'var(--status-ok-border)' },
  warn:    { color: 'var(--status-warn-fg)', background: 'var(--status-warn-bg)', borderColor: 'var(--status-warn-border)' },
  risk:    { color: 'var(--status-risk-fg)', background: 'var(--status-risk-bg)', borderColor: 'var(--status-risk-border)' },
  info:    { color: 'var(--status-info-fg)', background: 'var(--status-info-bg)', borderColor: 'var(--status-info-border)' },
  solid:   { color: 'var(--stone-0)', background: 'var(--navy-600)', borderColor: 'var(--navy-600)' }
};

export function Badge({ children, tone = 'neutral', size = 'md', style, ...rest }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
      padding: size === 'sm' ? '1px 7px' : '3px 10px',
      font: 'var(--fw-semibold) ' + (size === 'sm' ? 'var(--fs-micro)' : 'var(--fs-caption)') + '/1.5 var(--font-sans)',
      border: '1px solid', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap',
      ...TONE[tone], ...style
    }} {...rest}>{children}</span>
  );
}
