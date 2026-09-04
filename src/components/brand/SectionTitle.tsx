'use client';

import type { HTMLAttributes } from 'react';

export type SectionTitleSize = 'sm' | 'md' | 'lg';

const FONT_SIZE: Record<SectionTitleSize, string> = { sm: 'var(--fs-h1)', md: 'var(--fs-display-3)', lg: 'var(--fs-display-2)' };

export interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Supporting paragraph below. */
  sub?: string;
  /** @default "center" */
  align?: 'center' | 'left';
  /** @default "md" */
  size?: SectionTitleSize;
  /** Light type for navy backgrounds. @default true */
  onNavy?: boolean;
  /** Sentence case instead of ALL CAPS — reserved for the light band. @default false */
  sentenceCase?: boolean;
}

/**
 * Opens every marketing section: Playfair Display bold, ALL CAPS, centred — the site's
 * dominant pattern. Set `sentenceCase` for the light-band voice change
 * ("Também atendemos online para todo o Brasil.").
 *
 * @example
 * <SectionTitle sub="Um condomínio bem assessorado, juridicamente, corre menos riscos.">
 *   Assessoria jurídica para condomínios
 * </SectionTitle>
 * <SectionTitle sentenceCase onNavy={false}>Também atendemos online para todo o Brasil.</SectionTitle>
 */
export function SectionTitle({
  children, sub, align = 'center', size = 'md', onNavy = true, sentenceCase = false, style, ...rest
}: SectionTitleProps) {
  return (
    <div style={{ textAlign: align, display: 'grid', justifyItems: align === 'center' ? 'center' : 'start', gap: 'var(--space-4)', ...style }} {...rest}>
      <h2
        style={{
          font: `var(--fw-bold) ${FONT_SIZE[size]}/var(--lh-heading) var(--font-display)`,
          textTransform: sentenceCase ? 'none' : 'uppercase',
          letterSpacing: sentenceCase ? '0' : 'var(--ls-heading)',
          color: onNavy ? 'var(--text-on-inverse)' : 'var(--text-heading)',
        }}
      >
        {children}
      </h2>
      {sub && (
        <p style={{ maxWidth: '62ch', font: 'var(--fw-light) var(--fs-body)/var(--lh-body) var(--font-sans)', color: onNavy ? 'var(--text-on-inverse-muted)' : 'var(--text-body)' }}>
          {sub}
        </p>
      )}
    </div>
  );
}
