import type { CSSProperties } from 'react';

/**
 * Lucide glyph at brand stroke weight. Always currentColor, never filled.
 * Sizes: 16 inline, 18 UI default, 20 page headers.
 */
export interface IconProps {
  /** Lucide icon name, kebab or Pascal ("file-text" | "FileText"). */
  name: string;
  /** Pixel box. @default 18 */
  size?: number;
  /** @default 1.75 */
  strokeWidth?: number;
  style?: CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
