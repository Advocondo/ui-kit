import type { CSSProperties, ReactNode } from 'react';

/**
 * Marketing section heading: Playfair Display bold, ALL CAPS, centred — the site's dominant pattern.
 * Set `sentenceCase` for the light-band voice change ("Também atendemos online para todo o Brasil.").
 * @startingPoint section="Brand" subtitle="Títulos de seção do site" viewport="700x260"
 */
export interface SectionTitleProps {
  children?: ReactNode;
  /** Supporting paragraph below. */
  sub?: string;
  /** @default "center" */
  align?: 'center' | 'left';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Light type for navy backgrounds. @default true */
  onNavy?: boolean;
  /** Sentence case instead of ALL CAPS — reserved for the light band. @default false */
  sentenceCase?: boolean;
  style?: CSSProperties;
}
export function SectionTitle(props: SectionTitleProps): JSX.Element;
