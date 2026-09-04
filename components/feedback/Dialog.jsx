import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Dialog({ open = true, title, description, children, footer, onClose, width = 520, style, ...rest }) {
  if (!open) return null;
  return (
    <div role="presentation" onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 80, display: 'grid', placeItems: 'center',
      padding: 'var(--space-6)', background: 'var(--surface-overlay)'
    }}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: width, background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden', ...style
      }} {...rest}>
        <header style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-6) var(--space-6) var(--space-4)' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ font: 'var(--fw-semibold) var(--fs-h2)/1.3 var(--font-sans)', color: 'var(--text-heading)' }}>{title}</h2>
            {description && <p style={{ marginTop: 4, font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-muted)' }}>{description}</p>}
          </div>
          {onClose && <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', marginTop: 2 }}><Icon name="x" size={18} /></button>}
        </header>
        {children && <div style={{ padding: '0 var(--space-6) var(--space-6)' }}>{children}</div>}
        {footer && <footer style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-6)', background: 'var(--stone-50)', borderTop: '1px solid var(--border-subtle)' }}>{footer}</footer>}
      </div>
    </div>
  );
}
