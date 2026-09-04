import type { CSSProperties, ChangeEventHandler, ReactNode } from 'react';

/** Immediate on/off preference (no Save step). Use Checkbox inside forms that are submitted. */
export interface SwitchProps {
  /** @default false */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
  /** @default false */
  disabled?: boolean;
  style?: CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
