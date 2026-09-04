import type { CSSProperties, MouseEventHandler } from 'react';

/** Square icon-only control for toolbars and table rows. `label` is required — it becomes aria-label and title. */
export interface IconButtonProps {
  /** Lucide icon name. */
  icon: string;
  /** Accessible label (required). */
  label: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** `inverse` for use on navy surfaces. @default "ghost" */
  variant?: 'ghost' | 'inverse';
  /** @default false */
  active?: boolean;
  /** @default false */
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
