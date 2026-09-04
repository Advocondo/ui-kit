import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumb({ items = [], onNavigate, style, ...rest }) {
  return (
    <nav aria-label="Trilha" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, ...style }} {...rest}>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ display: 'flex', color: 'var(--stone-400)' }}><Icon name="chevron-right" size={13} /></span>}
          {i === items.length - 1
            ? <span style={{ font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{it.label}</span>
            : <button type="button" onClick={() => onNavigate && onNavigate(it.id)} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-link)' }}>{it.label}</button>}
        </React.Fragment>
      ))}
    </nav>
  );
}
