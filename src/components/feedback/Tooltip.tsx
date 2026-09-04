'use client';

import { useState, type HTMLAttributes } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

const PLACEMENT: Record<TooltipPlacement, { top?: string; bottom?: string; left?: string; right?: string; transform: string }> = {
  top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-6px)' },
  bottom: { top: '100%', left: '50%', transform: 'translate(-50%,6px)' },
  left: { right: '100%', top: '50%', transform: 'translate(-6px,-50%)' },
  right: { left: '100%', top: '50%', transform: 'translate(6px,-50%)' },
};

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string;
  /** @default "top" */
  placement?: TooltipPlacement;
}

/**
 * Navy label on hover/focus. For icon-only controls prefer {@link IconButton}'s built-in title.
 * Explains a truncated value or a terse column header.
 *
 * @example
 * <Tooltip label="Prazo fatal — não admite prorrogação"><Icon name="info" size={14} /></Tooltip>
 */
export function Tooltip({ children, label, placement = 'top', style, ...rest }: TooltipProps) {
  const [show, setShow] = useState(false);
  const pos = PLACEMENT[placement];
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      {...rest}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: 'absolute', zIndex: 70, pointerEvents: 'none', whiteSpace: 'nowrap',
          padding: '5px 9px', borderRadius: 'var(--radius-xs)',
          background: 'var(--navy-900)', color: 'var(--text-on-inverse)',
          font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)',
          boxShadow: 'var(--shadow-md)', opacity: show ? 1 : 0,
          transition: 'opacity var(--dur-fast) var(--ease-standard)', ...pos,
        }}
      >
        {label}
      </span>
    </span>
  );
}
