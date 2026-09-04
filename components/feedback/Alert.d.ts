import type { CSSProperties, ReactNode } from 'react';

/** Inline, persistent message inside a page — not a floating notification (use Toast for that). */
export interface AlertProps {
  /** @default "info" */
  tone?: 'info' | 'ok' | 'warn' | 'risk';
  title?: string;
  children?: ReactNode;
  /** Usually a ghost <Button />. */
  action?: ReactNode;
  /** Overrides the tone's default Lucide icon. */
  icon?: string;
  /** Renders a close affordance. */
  onClose?: () => void;
  style?: CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
