import type { CSSProperties, ReactNode } from 'react';

/**
 * Surface container. On light backgrounds the brand uses a hairline border with a whisper of
 * shadow (`default`); on navy it uses a borderless light fill with a diffuse dark shadow (`onNavy`).
 * @startingPoint section="Core" subtitle="Superfícies: claro, afundado, sobre navy" viewport="700x260"
 */
export interface CardProps {
  children?: ReactNode;
  /** @default "default" */
  tone?: 'default' | 'sunken' | 'onNavy' | 'inverse';
  /** @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Optional header title. */
  title?: string;
  /** Node rendered at the right of the header. */
  action?: ReactNode;
  /** Adds hover lift + pointer. @default false */
  interactive?: boolean;
  style?: CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
