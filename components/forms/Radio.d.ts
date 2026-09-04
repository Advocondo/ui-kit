import type { CSSProperties, ChangeEventHandler, ReactNode } from 'react';

/** Single-choice control. Group 2–4 options; beyond that use Select. */
export interface RadioProps {
  /** @default false */
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: ReactNode;
  name?: string;
  value?: string;
  /** @default false */
  disabled?: boolean;
  style?: CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
