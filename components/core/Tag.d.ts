import type { CSSProperties, ReactNode, MouseEventHandler } from 'react';

/** Removable / selectable chip used for active filters in the platform. */
export interface TagProps {
  children?: ReactNode;
  /** Renders an × affordance. */
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  /** @default false */
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  style?: CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
