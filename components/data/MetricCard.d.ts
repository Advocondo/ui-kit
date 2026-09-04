import type { CSSProperties, ReactNode } from 'react';

/**
 * Single figure with an uppercase micro label; the number is set in the display serif.
 * @startingPoint section="Data" subtitle="Indicadores do painel" viewport="700x180"
 */
export interface MetricCardProps {
  /** Uppercase micro label, e.g. "PROCESSOS ATIVOS". */
  label?: string;
  value?: ReactNode;
  /** Small trailing unit, e.g. "processos". */
  unit?: string;
  /** Change text, e.g. "+12 no mês". */
  delta?: string;
  /** @default "neutral" */
  deltaTone?: 'up' | 'down' | 'neutral';
  /** Lucide icon name, top-right. */
  icon?: string;
  /** Muted context line. */
  footnote?: string;
  /** `inverse` for navy panels. @default "default" */
  tone?: 'default' | 'inverse';
  style?: CSSProperties;
}
export function MetricCard(props: MetricCardProps): JSX.Element;
