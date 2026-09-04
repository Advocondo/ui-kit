'use client';

import { Fragment, type HTMLAttributes } from 'react';
import { Icon } from '../core/Icon';

export interface BreadcrumbItem {
  id?: string;
  label: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
  onNavigate?: (id: string) => void;
}

/**
 * Trail above a {@link TopBar} title; the last item is the current page and is not a link.
 * Shows where a detail view sits in the hierarchy.
 *
 * @example
 * <Breadcrumb items={[{ id: 'processos', label: 'Processos' }, { label: '0703451-22.2025.8.07.0020' }]} onNavigate={go} />
 */
export function Breadcrumb({ items = [], onNavigate, style, ...rest }: BreadcrumbProps) {
  return (
    <nav aria-label="Trilha" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, ...style }} {...rest}>
      {items.map((it, i) => (
        <Fragment key={it.id ?? i}>
          {i > 0 && <span style={{ display: 'flex', color: 'var(--stone-400)' }}><Icon name="chevron-right" size={13} /></span>}
          {i === items.length - 1 ? (
            <span style={{ font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{it.label}</span>
          ) : (
            <button
              type="button"
              onClick={() => it.id && onNavigate?.(it.id)}
              style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-link)' }}
            >
              {it.label}
            </button>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
