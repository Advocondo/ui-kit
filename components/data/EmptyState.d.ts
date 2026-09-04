import type { CSSProperties, ReactNode } from 'react';

/** Nothing-here message. Copy states the fact, then the next step, in pt-BR. */
export interface EmptyStateProps {
  /** Lucide icon name. @default "inbox" */
  icon?: string;
  title?: string;
  description?: string;
  /** Usually a single <Button />. */
  action?: ReactNode;
  /** Reduced padding for use inside a card. @default false */
  compact?: boolean;
  style?: CSSProperties;
}
export function EmptyState(props: EmptyStateProps): JSX.Element;
