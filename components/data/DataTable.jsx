import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function DataTable({ columns = [], rows = [], onRowClick, selectedId, empty, dense = false, style, ...rest }) {
  const [hoverRow, setHoverRow] = React.useState(null);
  const pad = dense ? '9px 14px' : '13px 16px';
  if (!rows.length && empty) return <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>{empty}</div>;
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden', ...style }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || 'left', padding: pad, background: 'var(--stone-50)',
                borderBottom: '1px solid var(--border-subtle)', width: c.width,
                font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
                color: 'var(--text-muted)', whiteSpace: 'nowrap'
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const active = selectedId != null && r.id === selectedId;
            return (
              <tr key={r.id ?? i} onClick={() => onRowClick && onRowClick(r)}
                onMouseEnter={() => setHoverRow(i)} onMouseLeave={() => setHoverRow(null)}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  background: active ? 'var(--surface-selected)' : hoverRow === i ? 'var(--surface-hover)' : 'transparent',
                  transition: 'background-color var(--dur-fast) var(--ease-standard)'
                }}>
                {columns.map((c) => (
                  <td key={c.key} style={{
                    padding: pad, textAlign: c.align || 'left',
                    borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                    font: c.mono ? 'var(--type-numeric)' : 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
                    fontVariantNumeric: c.mono ? 'tabular-nums' : undefined,
                    color: c.strong ? 'var(--text-heading)' : 'var(--text-body)',
                    fontWeight: c.strong ? 'var(--fw-medium)' : undefined,
                    verticalAlign: 'middle'
                  }}>{c.render ? c.render(r) : r[c.key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function SortHeader({ label, dir, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', color: 'inherit' }}>
      {label}<Icon name={dir === 'asc' ? 'chevron-up' : 'chevron-down'} size={12} style={{ opacity: dir ? 1 : 0.35 }} />
    </button>
  );
}
