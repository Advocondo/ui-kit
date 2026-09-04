import React from 'react';
import { Icon } from './Icon.jsx';

export function Tag({ children, onRemove, selected = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return (
    <span onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px',
        font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)',
        color: selected ? 'var(--navy-600)' : 'var(--text-body)',
        background: selected ? 'var(--surface-selected)' : hover && clickable ? 'var(--surface-hover)' : 'var(--stone-0)',
        border: '1px solid ' + (selected ? 'var(--navy-200)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-sm)', cursor: clickable ? 'pointer' : 'default',
        transition: 'var(--transition-control)', ...style
      }} {...rest}>
      {children}
      {onRemove && (
        <button type="button" aria-label="Remover" onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ display: 'inline-flex', border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-muted)' }}>
          <Icon name="x" size={13} />
        </button>
      )}
    </span>
  );
}
