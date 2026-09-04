import type { CSSProperties, ReactNode } from 'react';

/** Modal over a navy 62% scrim; 10px radius, sunken footer strip for actions. */
export interface DialogProps {
  /** @default true */
  open?: boolean;
  title?: string;
  description?: string;
  children?: ReactNode;
  /** Action row, right-aligned. Cancel first, primary last. */
  footer?: ReactNode;
  onClose?: () => void;
  /** Max width in px. @default 520 */
  width?: number;
  style?: CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element;
