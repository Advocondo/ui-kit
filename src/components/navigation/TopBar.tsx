'use client';

import { useState, type ChangeEventHandler, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

export type TopBarTone = 'light' | 'navy';

export interface TopBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode;
  subtitle?: string;
  /** Usually a <Breadcrumb />. */
  breadcrumb?: ReactNode;
  /** Right-aligned controls. */
  actions?: ReactNode;
  /** `navy` for the marketing-style bar. @default "light" */
  tone?: TopBarTone;
}

/**
 * Page header bar for platform views: 60px min height, title + optional breadcrumb and actions.
 * Header for every platform screen; pair with {@link SidebarNav}.
 *
 * @example
 * <TopBar title="Processos" subtitle="248 processos ativos em 34 condomínios"
 *   actions={<><TopBarSearch placeholder="Buscar processo ou cliente" /><Button icon="plus">Novo processo</Button></>} />
 */
export function TopBar({ title, subtitle, breadcrumb, actions, tone = 'light', style, ...rest }: TopBarProps) {
  const inverse = tone === 'navy';
  return (
    <header
      style={{
        minHeight: 'var(--app-topbar-h)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)',
        padding: '0 var(--app-pad)',
        background: inverse ? 'var(--surface-brand)' : 'var(--surface-card)',
        borderBottom: `1px solid ${inverse ? 'transparent' : 'var(--border-subtle)'}`, ...style,
      }}
      {...rest}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        {breadcrumb}
        <h1 style={{ font: 'var(--fw-semibold) var(--fs-h2)/1.25 var(--font-sans)', color: inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h1>
        {subtitle && <p style={{ marginTop: 2, font: 'var(--fw-light) var(--fs-body-sm)/1.5 var(--font-sans)', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>{actions}</div>}
    </header>
  );
}

export interface TopBarSearchProps {
  /** @default "Buscar" */
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
}

/** Search field sized for the top bar. */
export function TopBarSearch({ placeholder = 'Buscar', value, onChange, style }: TopBarSearchProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: 300, ...style }}>
      <span style={{ position: 'absolute', left: 11, display: 'flex', color: 'var(--text-muted)' }}><Icon name="search" size={16} /></span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', height: 'var(--control-h-md)', padding: '0 12px 0 34px',
          font: 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)', color: 'var(--text-heading)',
          background: 'var(--stone-0)', border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-sm)', outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none',
          transition: 'var(--transition-control)',
        }}
      />
    </div>
  );
}
