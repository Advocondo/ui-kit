'use client';

import { useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { Icon } from '../core/Icon';

export interface DataTableColumn<Row extends { id?: string | number } = any> {
  key: string;
  label?: ReactNode;
  /** @default "left" */
  align?: 'left' | 'right' | 'center';
  width?: string | number;
  /** Renders the cell with the mono/tabular face — CNJ numbers, dates, money. */
  mono?: boolean;
  /** Heading-coloured medium weight, for the identifying column. */
  strong?: boolean;
  /** Custom cell renderer. */
  render?: (row: Row) => ReactNode;
}

export interface DataTableProps<Row extends { id?: string | number } = any> extends HTMLAttributes<HTMLDivElement> {
  columns?: DataTableColumn<Row>[];
  rows?: Row[];
  onRowClick?: (row: Row) => void;
  /** Highlights the row whose `id` matches. */
  selectedId?: string | number;
  /** Node shown instead of the table when `rows` is empty — usually an <EmptyState />. */
  empty?: ReactNode;
  /** Tighter row padding. @default false */
  dense?: boolean;
}

/**
 * The platform's list surface: hairline-bordered card, uppercase micro headers on `--stone-50`,
 * row hover to `--surface-hover`.
 *
 * @example
 * <DataTable onRowClick={open} columns={[
 *   { key: 'numero', label: <SortHeader label="Número CNJ" dir="asc" />, mono: true, strong: true },
 *   { key: 'cliente', label: 'Cliente' },
 *   { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
 *   { key: 'valor', label: 'Valor', mono: true, align: 'right' },
 * ]} rows={rows} />
 */
export function DataTable<Row extends { id?: string | number } = any>({
  columns = [], rows = [], onRowClick, selectedId, empty, dense = false, style, ...rest
}: DataTableProps<Row>) {
  const [hoverRow, setHoverRow] = useState<number | null>(null);
  const pad = dense ? '9px 14px' : '13px 16px';
  if (!rows.length && empty) {
    return <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>{empty}</div>;
  }
  return (
    <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-xs)', overflow: 'hidden', ...style }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                style={{
                  textAlign: c.align || 'left', padding: pad, background: 'var(--stone-50)',
                  borderBottom: '1px solid var(--border-subtle)', width: c.width,
                  font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
                  color: 'var(--text-muted)', whiteSpace: 'nowrap',
                }}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const active = selectedId != null && r.id === selectedId;
            return (
              <tr
                key={r.id ?? i}
                onClick={() => onRowClick?.(r)}
                onMouseEnter={() => setHoverRow(i)}
                onMouseLeave={() => setHoverRow(null)}
                style={{
                  cursor: onRowClick ? 'pointer' : 'default',
                  background: active ? 'var(--surface-selected)' : hoverRow === i ? 'var(--surface-hover)' : 'transparent',
                  transition: 'background-color var(--dur-fast) var(--ease-standard)',
                }}
              >
                {columns.map((c) => (
                  <td
                    key={c.key}
                    style={{
                      padding: pad, textAlign: c.align || 'left',
                      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                      font: c.mono ? 'var(--type-numeric)' : 'var(--fw-regular) var(--fs-body-sm)/1.5 var(--font-sans)',
                      fontVariantNumeric: c.mono ? 'tabular-nums' : undefined,
                      color: c.strong ? 'var(--text-heading)' : 'var(--text-body)',
                      fontWeight: c.strong ? 'var(--fw-medium)' : undefined,
                      verticalAlign: 'middle',
                    }}
                  >
                    {c.render ? c.render(r) : ((r as Record<string, unknown>)[c.key] as ReactNode)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export interface SortHeaderProps {
  label?: ReactNode;
  dir?: 'asc' | 'desc' | null;
  onClick?: () => void;
}

/** Clickable column header with a sort chevron. */
export function SortHeader({ label, dir, onClick }: SortHeaderProps) {
  const style: CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 4, border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit', color: 'inherit' };
  return (
    <button type="button" onClick={onClick} style={style}>
      {label}
      <Icon name={dir === 'asc' ? 'chevron-up' : 'chevron-down'} size={12} style={{ opacity: dir ? 1 : 0.35 }} />
    </button>
  );
}
