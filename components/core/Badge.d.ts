import type { CSSProperties, ReactNode } from 'react';

/** Small square-ish label for counts, categories and qualifiers. For case status use StatusPill instead. */
export interface BadgeProps {
  children?: ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'brand' | 'ok' | 'warn' | 'risk' | 'info' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md';
  style?: CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
