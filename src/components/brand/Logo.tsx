'use client';

import type { CSSProperties, ImgHTMLAttributes } from 'react';

const DEFAULT_BASE = 'assets/';

export type LogoVariant = 'mark' | 'lockup' | 'wordmark';

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'height'> {
  /** @default "lockup" */
  variant?: LogoVariant;
  /** Rendered height in px. @default 56 */
  height?: number;
  /** Path prefix to the design system's `assets/` folder, with trailing slash. @default "assets/" */
  base?: string;
  /** White artwork for navy backgrounds; false swaps to the navy-plate artwork. @default true */
  onNavy?: boolean;
  style?: CSSProperties;
}

/**
 * The firm's mark. `mark` is the EA laurel alone; `lockup` adds the wordmark;
 * `wordmark` is a type-only fallback set in Cinzel (use only when the raster can't be loaded).
 * The artwork is raster, extracted from the supplied JPEG — avoid rendering it above ~200px tall.
 *
 * @example
 * <Logo variant="lockup" height={72} base="../../assets/" />
 * <Logo variant="mark" height={30} onNavy={false} base="../../assets/" />
 */
export function Logo({ variant = 'lockup', height = 56, base = DEFAULT_BASE, onNavy = true, style, ...rest }: LogoProps) {
  if (variant === 'wordmark') {
    return (
      <span style={{ display: 'inline-grid', justifyItems: 'center', gap: 2, color: onNavy ? 'var(--stone-0)' : 'var(--navy-900)', ...style }}>
        <span style={{ fontFamily: 'var(--font-logotype)', fontWeight: 'var(--fw-semibold)', fontSize: height * 0.42, letterSpacing: 'var(--ls-logotype)', lineHeight: 1.1, textTransform: 'uppercase' }}>
          Edson Alexandre
        </span>
        <span style={{ fontFamily: 'var(--font-logotype)', fontWeight: 'var(--fw-regular)', fontSize: height * 0.2, letterSpacing: '.34em', lineHeight: 1, textTransform: 'uppercase', opacity: 0.82 }}>
          Advogados
        </span>
      </span>
    );
  }
  const src = base + (variant === 'mark'
    ? (onNavy ? 'logo-mark-white.png' : 'logo-mark-navy.png')
    : (onNavy ? 'logo-lockup-white.png' : 'logo-lockup-navy.png'));
  return <img src={src} alt="Edson Alexandre Advogados" style={{ height, width: 'auto', display: 'block', ...style }} {...rest} />;
}
