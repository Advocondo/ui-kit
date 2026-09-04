'use client';

import { useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';

export type CardTone = 'default' | 'sunken' | 'onNavy' | 'inverse';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

const TONE: Record<CardTone, CSSProperties> = {
  default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)', color: 'var(--text-body)' },
  sunken: { background: 'var(--surface-sunken)', border: '1px solid transparent', boxShadow: 'none', color: 'var(--text-body)' },
  onNavy: { background: 'var(--stone-200)', border: 'none', boxShadow: 'var(--shadow-card-site)', color: 'var(--navy-900)' },
  inverse: { background: 'var(--surface-inverse-raised)', border: '1px solid var(--border-inverse)', boxShadow: 'none', color: 'var(--text-on-inverse)' },
};
const PADDING: Record<CardPadding, string | number> = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };

export interface CardProps extends HTMLAttributes<HTMLElement> {
  /** @default "default" */
  tone?: CardTone;
  /** @default "md" */
  padding?: CardPadding;
  /** Optional header title. */
  title?: string;
  /** Node rendered at the right of the header. */
  action?: ReactNode;
  /** Adds hover lift + pointer. @default false */
  interactive?: boolean;
}

/**
 * Base surface for grouped content; pick the tone by the background it sits on.
 * Tones: `default` (white + hairline, platform) · `sunken` (#E8E6E6 fill) ·
 * `onNavy` (marketing card on the navy field, 10px radius) · `inverse` (navy-800 panel).
 *
 * @example
 * <Card title="Prazos da semana" action={<Button variant="ghost" size="sm">Ver todos</Button>}>…</Card>
 * <Card tone="onNavy">Conteúdo claro sobre fundo navy</Card>
 */
export function Card({
  children, tone = 'default', padding = 'md', title, action, interactive = false, style, ...rest
}: CardProps) {
  const [hover, setHover] = useState(false);
  const headerPad = padding === 'none' ? 'var(--space-5) var(--space-5) var(--space-4)' : '0';
  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: tone === 'onNavy' ? 'var(--radius-md)' : 'var(--radius-sm)', padding: PADDING[padding], overflow: 'hidden',
        transition: 'var(--transition-control)', cursor: interactive ? 'pointer' : undefined,
        ...TONE[tone], ...(interactive && hover ? { boxShadow: 'var(--shadow-md)', borderColor: 'var(--navy-200)' } : null), ...style,
      }}
      {...rest}
    >
      {(title || action) && (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)', padding: headerPad, marginBottom: padding === 'none' ? 0 : 'var(--space-4)' }}>
          <h3 style={{ font: 'var(--fw-semibold) var(--fs-h3)/1.3 var(--font-sans)', color: 'inherit', margin: 0 }}>{title}</h3>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
