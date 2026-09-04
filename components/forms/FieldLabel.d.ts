import type { CSSProperties, ReactNode } from 'react';

/** Field label with the brand's required marker (a red asterisk, as on the site's contact form). */
export interface FieldLabelProps {
  children?: ReactNode;
  htmlFor?: string;
  /** Appends a red asterisk. @default false */
  required?: boolean;
  /** Muted trailing hint, e.g. "opcional". */
  hint?: string;
  style?: CSSProperties;
}
export function FieldLabel(props: FieldLabelProps): JSX.Element;
