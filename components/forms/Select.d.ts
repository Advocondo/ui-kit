import type { CSSProperties, ChangeEventHandler } from 'react';

export interface SelectOption { value: string; label: string }

/** Native select styled to match Input, with a Lucide chevron. */
export interface SelectProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  /** Strings or {value,label} pairs. */
  options?: Array<string | SelectOption>;
  /** Empty first option, e.g. "Todos os status". */
  placeholder?: string;
  /** @default false */
  invalid?: boolean;
  /** @default false */
  disabled?: boolean;
  id?: string;
  style?: CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
