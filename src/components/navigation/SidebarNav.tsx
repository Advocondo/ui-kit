'use client';

import { useState, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

export interface SidebarNavItem {
  /** Stable id compared against `activeId`. */
  id?: string;
  label?: string;
  /** Lucide icon name. */
  icon?: string;
  /** Trailing count badge. */
  count?: number;
  /** When set, the entry renders as an uppercase section heading instead of a link. */
  section?: string;
}

export interface SidebarNavProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  items?: SidebarNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Brand lockup slot at the top. */
  header?: ReactNode;
  /** User/account slot at the bottom. */
  footer?: ReactNode;
}

/**
 * Fixed 248px navy sidebar — the platform's primary navigation. Active items carry a 2px
 * light left marker. Insert `{ section: 'Título' }` entries to group links.
 *
 * @example
 * <SidebarNav activeId="processos" onSelect={setView}
 *   header={<Logo variant="lockup" height={54} />}
 *   items={[
 *     { id: 'painel', label: 'Painel', icon: 'layout-dashboard' },
 *     { section: 'Acompanhamento' },
 *     { id: 'processos', label: 'Processos', icon: 'gavel', count: 248 },
 *     { id: 'prazos', label: 'Prazos', icon: 'calendar-clock', count: 7 },
 *   ]} />
 */
export function SidebarNav({ items = [], activeId, onSelect, header, footer, style, ...rest }: SidebarNavProps) {
  return (
    <nav
      style={{
        width: 'var(--app-sidebar-w)', flex: '0 0 auto', height: '100%', display: 'flex', flexDirection: 'column',
        background: 'var(--surface-inverse)', borderRight: '1px solid var(--border-inverse)', ...style,
      }}
      {...rest}
    >
      {header && <div style={{ padding: 'var(--space-5) var(--space-5) var(--space-4)' }}>{header}</div>}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--space-3) var(--space-4)' }}>
        {items.map((it, i) =>
          it.section ? (
            <p key={it.section} style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'rgba(255,255,255,.42)', padding: '18px 12px 8px' }}>
              {it.section}
            </p>
          ) : (
            <SidebarItem key={it.id ?? i} item={it} active={it.id === activeId} onSelect={onSelect} />
          ),
        )}
      </div>
      {footer && <div style={{ padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-inverse)' }}>{footer}</div>}
    </nav>
  );
}

interface SidebarItemProps {
  item: SidebarNavItem;
  active: boolean;
  onSelect?: (id: string) => void;
}

/** Internal — one link row inside {@link SidebarNav}, not exported. */
function SidebarItem({ item, active, onSelect }: SidebarItemProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onClick={() => item.id && onSelect?.(item.id)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', width: '100%', display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
        padding: '9px 12px', border: 0, borderRadius: 'var(--radius-sm)', cursor: 'pointer', textAlign: 'left',
        font: 'var(--fw-medium) var(--fs-body-sm)/1.4 var(--font-sans)',
        color: active ? 'var(--stone-0)' : hover ? 'var(--stone-0)' : 'var(--text-on-inverse-muted)',
        background: active ? 'rgba(255,255,255,.10)' : hover ? 'rgba(255,255,255,.055)' : 'transparent',
        transition: 'var(--transition-control)',
      }}
    >
      {active && <span style={{ position: 'absolute', left: 0, top: 7, bottom: 7, width: 2, background: 'var(--navy-200)', borderRadius: 2 }} />}
      <Icon name={item.icon ?? 'circle'} size={17} />
      <span style={{ flex: 1 }}>{item.label}</span>
      {item.count != null && (
        <span
          style={{
            font: 'var(--fw-semibold) var(--fs-micro)/1.6 var(--font-mono)', color: active ? 'var(--navy-900)' : 'var(--text-on-inverse-muted)',
            background: active ? 'var(--stone-0)' : 'rgba(255,255,255,.10)', borderRadius: 'var(--radius-pill)', padding: '1px 7px',
          }}
        >
          {item.count}
        </span>
      )}
    </button>
  );
}
