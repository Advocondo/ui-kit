import type { CSSProperties, ChangeEventHandler } from 'react';

/** Multi-line field. The site's contact form uses a 4-row textarea labelled "Mensagem". */
export interface TextareaProps {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  /** @default 4 */
  rows?: number;
  /** @default false */
  invalid?: boolean;
  /** @default false */
  disabled?: boolean;
  id?: string;
  style?: CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
