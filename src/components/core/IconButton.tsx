'use client';

import { useState, type ButtonHTMLAttributes } from 'react';
import { Icon } from './Icon';

export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonVariant = 'ghost' | 'inverse';

const SIZE: Record<IconButtonSize, number> = { sm: 28, md: 34, lg: 40 };

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label (required) — becomes `aria-label` and `title`. */
  label: string;
  /** @default "md" */
  size?: IconButtonSize;
  /** `inverse` for use on navy surfaces. @default "ghost" */
  variant?: IconButtonVariant;
  /** @default false */
  active?: boolean;
}

/**
 * Square icon-only control for toolbars, table row actions and top bars; always pass `label`.
 *
 * @example
 * <IconButton icon="bell" label="Notificações" variant="inverse" />
 * <IconButton icon="ellipsis-vertical" label="Mais ações" size="sm" />
 */
export function IconButton({
  icon, label, size = 'md', variant = 'ghost', active = false, disabled = false, onClick, style, ...rest
}: IconButtonProps) {
  const [hover, setHover] = useState(false);
  const onNavy = variant === 'inverse';
  const base = onNavy
    ? { color: active ? 'var(--stone-0)' : 'var(--text-on-inverse-muted)', background: active ? 'rgba(255,255,255,.12)' : 'transparent' }
    : { color: active ? 'var(--navy-600)' : 'var(--text-body)', background: active ? 'var(--surface-selected)' : 'transparent' };
  const hoverStyle = onNavy
    ? { color: 'var(--stone-0)', background: 'rgba(255,255,255,.12)' }
    : { color: 'var(--navy-600)', background: 'var(--surface-hover)' };
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: SIZE[size], height: SIZE[size], display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid transparent', borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'var(--transition-control)',
        ...base, ...(hover && !disabled ? hoverStyle : null), ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} />
    </button>
  );
}
