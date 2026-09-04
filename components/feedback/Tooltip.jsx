import React from 'react';

export function Tooltip({ children, label, placement = 'top', style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-6px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,6px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-6px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(6px,-50%)' }
  }[placement];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)} {...rest}>
      {children}
      <span role="tooltip" style={{
        position: 'absolute', zIndex: 70, pointerEvents: 'none', whiteSpace: 'nowrap',
        padding: '5px 9px', borderRadius: 'var(--radius-xs)',
        background: 'var(--navy-900)', color: 'var(--text-on-inverse)',
        font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
        boxShadow: 'var(--shadow-md)', opacity: show ? 1 : 0,
        transition: 'opacity var(--dur-fast) var(--ease-standard)', ...pos
      }}>{label}</span>
    </span>
  );
}
