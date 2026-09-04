import type { CSSProperties, ReactNode } from 'react';

export interface DataTableColumn<Row = any> {
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

/**
 * The platform's list surface: hairline-bordered card, uppercase micro headers on `--stone-50`,
 * row hover to `--surface-hover`.
 * @startingPoint section="Data" subtitle="Tabela de processos" viewport="700x320"
 */
export interface DataTableProps<Row = any> {
  columns?: DataTableColumn<Row>[];
  rows?: Row[];
  onRowClick?: (row: Row) => void;
  /** Highlights the row whose `id` matches. */
  selectedId?: string | number;
  /** Node shown instead of the table when `rows` is empty — usually an <EmptyState />. */
  empty?: ReactNode;
  /** Tighter row padding. @default false */
  dense?: boolean;
  style?: CSSProperties;
}
export function DataTable<Row = any>(props: DataTableProps<Row>): JSX.Element;

/** Clickable column header with a sort chevron. */
export interface SortHeaderProps {
  label?: ReactNode;
  dir?: 'asc' | 'desc' | null;
  onClick?: () => void;
}
export function SortHeader(props: SortHeaderProps): JSX.Element;
