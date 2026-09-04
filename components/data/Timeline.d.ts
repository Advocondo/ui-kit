import type { CSSProperties } from 'react';

export interface TimelineItem {
  title?: string;
  /** dd/mm/aaaa, rendered in the mono face. */
  date?: string;
  description?: string;
  /** Author / origin line, e.g. "Registrado por Dra. Amanda Pessoa". */
  meta?: string;
  /** Lucide icon name. @default "circle-dot" */
  icon?: string;
  /** @default "neutral" */
  tone?: 'neutral' | 'brand' | 'ok' | 'warn' | 'risk';
}

/**
 * Vertical history of a case — movimentações, despachos, audiências, audit entries.
 * @startingPoint section="Data" subtitle="Histórico de movimentações" viewport="700x340"
 */
export interface TimelineProps {
  items?: TimelineItem[];
  style?: CSSProperties;
}
export function Timeline(props: TimelineProps): JSX.Element;
