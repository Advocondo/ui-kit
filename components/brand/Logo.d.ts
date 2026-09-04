import type { CSSProperties } from 'react';

/**
 * The firm's mark. `mark` is the EA laurel alone; `lockup` adds the wordmark;
 * `wordmark` is a type-only fallback set in Cinzel (use only when the raster can't be loaded).
 * @startingPoint section="Brand" subtitle="Marca, lockup e wordmark" viewport="700x200"
 */
export interface LogoProps {
  /** @default "lockup" */
  variant?: 'mark' | 'lockup' | 'wordmark';
  /** Rendered height in px. @default 56 */
  height?: number;
  /** Path prefix to the design system's `assets/` folder, with trailing slash. @default "assets/" */
  base?: string;
  /** White artwork for navy backgrounds; false swaps to the navy-plate artwork. @default true */
  onNavy?: boolean;
  style?: CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
