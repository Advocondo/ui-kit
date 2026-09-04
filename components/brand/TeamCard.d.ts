import type { CSSProperties } from 'react';

/**
 * A team member as the site presents them: hard-edged 3:4 portrait crop, no radius, no scrim,
 * bold sans name and muted role below. Designed for the navy field.
 * @startingPoint section="Brand" subtitle="Equipe — retratos 3:4" viewport="700x260"
 */
export interface TeamCardProps {
  name?: string;
  /** e.g. "Advogado Sócio". */
  role?: string;
  /** Image URL. */
  photo?: string;
  /** Card width in px; height follows 3:4. @default 132 */
  width?: number;
  style?: CSSProperties;
}
export function TeamCard(props: TeamCardProps): JSX.Element;
