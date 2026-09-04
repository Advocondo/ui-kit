import type { CSSProperties, ChangeEventHandler } from 'react';

/**
 * Single-line text field, 40px tall (`--field-h`), 6px radius.
 * @startingPoint section="Forms" subtitle="Campos de texto, busca e número CNJ" viewport="700x220"
 */
export interface InputProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  /** @default "text" */
  type?: 'text' | 'email' | 'tel' | 'search' | 'password' | 'date' | 'number';
  /** Lucide icon name rendered inside, at the left. */
  icon?: string;
  /** @default false */
  invalid?: boolean;
  /** @default false */
  disabled?: boolean;
  /** Sets the mono/tabular face — use for CNJ numbers and money. @default false */
  mono?: boolean;
  /** Error text shown below in red; also implies invalid styling when combined with `invalid`. */
  error?: string;
  id?: string;
  style?: CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
