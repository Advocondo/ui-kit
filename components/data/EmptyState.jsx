import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function EmptyState({ icon = 'inbox', title, description, action, compact = false, style, ...rest }) {
  return (
    <div style={{ display: 'grid', justifyItems: 'center', textAlign: 'center', gap: 'var(--space-3)', padding: compact ? 'var(--space-8)' : 'var(--space-16) var(--space-8)', ...style }} {...rest}>
      <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: '50%', background: 'var(--stone-100)', color: 'var(--stone-500)' }}><Icon name={icon} size={20} /></span>
      <p style={{ font: 'var(--fw-semibold) var(--fs-h3)/1.3 var(--font-sans)', color: 'var(--text-heading)' }}>{title}</p>
      {description && <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-muted)', maxWidth: '46ch' }}>{description}</p>}
      {action && <div style={{ marginTop: 'var(--space-2)' }}>{action}</div>}
    </div>
  );
}
