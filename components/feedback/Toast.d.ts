import type { CSSProperties, ReactNode } from 'react';

/** Transient confirmation, navy-on-light so it reads as a system voice. Bottom-right. */
export interface ToastProps {
  /** @default "info" */
  tone?: 'info' | 'ok' | 'warn' | 'risk';
  title?: string;
  description?: string;
  onClose?: () => void;
  style?: CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;

/** Fixed bottom-right container for one or more Toasts. */
export interface ToastStackProps { children?: ReactNode; style?: CSSProperties }
export function ToastStack(props: ToastStackProps): JSX.Element;
