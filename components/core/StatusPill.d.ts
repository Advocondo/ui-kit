import type { CSSProperties } from 'react';

/**
 * Case / prazo state as a dotted pill. The only pill-radius element in the system besides avatars.
 * @startingPoint section="Core" subtitle="Estados de processo e prazo" viewport="700x160"
 */
export interface StatusPillProps {
  /** Domain state; sets both label and tone. @default "ativo" */
  status?: 'ativo' | 'suspenso' | 'arquivado' | 'ganho' | 'perdido' | 'acordo' | 'prazo' | 'urgente' | 'transitado';
  /** Overrides the default Portuguese label. */
  label?: string;
  /** Overrides the tone implied by `status`. */
  tone?: 'neutral' | 'ok' | 'warn' | 'risk' | 'info';
  /** @default true */
  dot?: boolean;
  style?: CSSProperties;
}
export function StatusPill(props: StatusPillProps): JSX.Element;
