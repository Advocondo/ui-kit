import type { CSSProperties, ReactNode } from 'react';

/**
 * The site's practice-area card: #E8E6E6 fill, 10px radius, no border, diffuse dark shadow,
 * ALL-CAPS bold sans title over centred light body copy. Lay out 3-up.
 * @startingPoint section="Brand" subtitle="Cards de área de atuação" viewport="700x230"
 */
export interface PracticeCardProps {
  /** ALL-CAPS area name, e.g. "Direito Condominial". */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export function PracticeCard(props: PracticeCardProps): JSX.Element;
