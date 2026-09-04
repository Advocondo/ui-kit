import type { CSSProperties, ReactNode, ChangeEventHandler } from 'react';

/** Page header bar for platform views: 60px min height, title + optional breadcrumb and actions. */
export interface TopBarProps {
  title?: ReactNode;
  subtitle?: string;
  /** Usually a <Breadcrumb />. */
  breadcrumb?: ReactNode;
  /** Right-aligned controls. */
  actions?: ReactNode;
  /** `navy` for the marketing-style bar. @default "light" */
  tone?: 'light' | 'navy';
  style?: CSSProperties;
}
export function TopBar(props: TopBarProps): JSX.Element;

/** Search field sized for the top bar. */
export interface TopBarSearchProps {
  /** @default "Buscar" */
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
}
export function TopBarSearch(props: TopBarSearchProps): JSX.Element;
