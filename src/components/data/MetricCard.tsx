'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../core/Icon';

export type MetricDeltaTone = 'up' | 'down' | 'neutral';
export type MetricCardTone = 'default' | 'inverse';

const DELTA_COLOR: Record<MetricDeltaTone, string> = { up: 'var(--green-600)', down: 'var(--red-600)', neutral: 'var(--text-muted)' };

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Uppercase micro label, e.g. "PROCESSOS ATIVOS". */
  label?: string;
  value?: ReactNode;
  /** Small trailing unit, e.g. "processos". */
  unit?: string;
  /** Change text, e.g. "+12 no mês". */
  delta?: string;
  /** @default "neutral" */
  deltaTone?: MetricDeltaTone;
  /** Lucide icon name, top-right. */
  icon?: string;
  /** Muted context line. */
  footnote?: string;
  /** `inverse` for navy panels. @default "default" */
  tone?: MetricCardTone;
}

/**
 * Single figure with an uppercase micro label; the number is set in the display serif.
 * Headline figures at the top of the painel; put 3–4 in a grid.
 *
 * @example
 * <MetricCard label="Processos ativos" value="248" icon="gavel" delta="+12 no mês" deltaTone="up" />
 * <MetricCard label="Prazos em 7 dias" value="7" icon="calendar-clock" footnote="2 fatais" />
 */
export function MetricCard({ label, value, unit, delta, deltaTone = 'neutral', icon, footnote, tone = 'default', style, ...rest }: MetricCardProps) {
  const inverse = tone === 'inverse';
  const dTone = DELTA_COLOR[deltaTone];
  return (
    <div
      style={{
        padding: 'var(--space-5)', borderRadius: 'var(--radius-sm)',
        background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)',
        border: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
        boxShadow: inverse ? 'none' : 'var(--shadow-xs)', ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
        <p style={{ font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{label}</p>
        {icon && <span style={{ display: 'flex', color: inverse ? 'var(--navy-200)' : 'var(--stone-400)' }}><Icon name={icon} size={16} /></span>}
      </div>
      <p style={{ marginTop: 'var(--space-3)', display: 'flex', alignItems: 'baseline', gap: 6, font: 'var(--fw-bold) var(--fs-display-3)/1.05 var(--font-display)', color: inverse ? 'var(--text-on-inverse)' : 'var(--text-heading)' }}>
        {value}
        {unit && <span style={{ font: 'var(--fw-regular) var(--fs-body-sm)/1 var(--font-sans)', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{unit}</span>}
      </p>
      {(delta || footnote) && (
        <div style={{ marginTop: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          {delta && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, font: 'var(--fw-medium) var(--fs-caption)/1.4 var(--font-sans)', color: dTone }}>
              {deltaTone !== 'neutral' && <Icon name={deltaTone === 'up' ? 'trending-up' : 'trending-down'} size={13} />}
              {delta}
            </span>
          )}
          {footnote && <span style={{ font: 'var(--fw-light) var(--fs-caption)/1.4 var(--font-sans)', color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)' }}>{footnote}</span>}
        </div>
      )}
    </div>
  );
}
