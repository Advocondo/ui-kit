import type { CSSProperties, ReactNode } from 'react';

/** Navy label on hover/focus. For icon-only controls prefer IconButton's built-in title. */
export interface TooltipProps {
  children?: ReactNode;
  label?: string;
  /** @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  style?: CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
