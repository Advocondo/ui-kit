import type { CSSProperties, ReactNode, MouseEventHandler } from 'react';

/**
 * The brand's action control: a small-radius navy rectangle, never a pill.
 * `outline` is the signature secondary **on navy** (white hairline, transparent fill).
 * @startingPoint section="Core" subtitle="Botões, variantes e tamanhos" viewport="700x220"
 */
export interface ButtonProps {
  children?: ReactNode;
  /** @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name rendered before the label. */
  icon?: string;
  /** Lucide icon name rendered after the label. */
  iconEnd?: string;
  /** Full-width. @default false */
  block?: boolean;
  /** @default false */
  disabled?: boolean;
  /** Shows a spinner glyph and blocks interaction. @default false */
  loading?: boolean;
  /** @default "button" */
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
