import React from 'react';

export function Tabs({ items = [], activeId, onSelect, style, ...rest }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--border-subtle)', ...style }} {...rest}>
      {items.map((it) => {
        const active = it.id === activeId;
        return (
          <button key={it.id} role="tab" aria-selected={active} type="button" onClick={() => onSelect && onSelect(it.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '0 0 10px', border: 0, background: 'none', cursor: 'pointer',
              font: (active ? 'var(--fw-semibold)' : 'var(--fw-regular)') + ' var(--fs-body-sm)/1.4 var(--font-sans)',
              color: active ? 'var(--navy-600)' : 'var(--text-muted)',
              boxShadow: active ? 'inset 0 -2px 0 var(--navy-600)' : 'none',
              transition: 'var(--transition-control)'
            }}>
            {it.label}
            {it.count != null && <span style={{ font: 'var(--fw-medium) var(--fs-micro)/1.6 var(--font-mono)', color: 'var(--text-muted)', background: 'var(--stone-100)', borderRadius: 'var(--radius-pill)', padding: '1px 6px' }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
