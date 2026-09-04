import type { CSSProperties, ChangeEventHandler, ReactNode } from 'react';

/** Square 17px checkbox filled navy when on. The site uses a checkmark list for its three claims. */
export interface CheckboxProps {
  /** @default false */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
  /** Muted second line. */
  description?: string;
  /** @default false */
  disabled?: boolean;
  style?: CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
