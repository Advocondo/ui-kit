'use client';

import type { HTMLAttributes } from 'react';
import { Icon } from '../core/Icon';

export type TimelineTone = 'neutral' | 'brand' | 'ok' | 'warn' | 'risk';

const TONE_COLOR: Record<TimelineTone, string> = {
  neutral: 'var(--stone-400)', brand: 'var(--navy-600)',
  ok: 'var(--green-600)', warn: 'var(--amber-600)', risk: 'var(--red-600)',
};

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
  tone?: TimelineTone;
}

export interface TimelineProps extends HTMLAttributes<HTMLOListElement> {
  items?: TimelineItem[];
}

/**
 * Vertical history of a case — movimentações, despachos, audiências, audit entries.
 * Chronological record of a processo (newest first) or an audit trail.
 *
 * @example
 * <Timeline items={[
 *   { title: 'Sentença publicada', date: '28/08/2026', tone: 'ok', icon: 'gavel',
 *     description: 'Procedência parcial dos pedidos. Cobrança das taxas condominiais em atraso deferida.',
 *     meta: 'Registrado por Dr. Edson Alexandre' },
 * ]} />
 */
export function Timeline({ items = [], style, ...rest }: TimelineProps) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const color = TONE_COLOR[it.tone || 'neutral'];
        return (
          <li key={i} style={{ display: 'grid', gridTemplateColumns: '26px 1fr', columnGap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', display: 'grid', placeItems: 'center', color, background: 'var(--stone-0)', border: '1px solid var(--border-default)', flex: '0 0 auto' }}>
                <Icon name={it.icon || 'circle-dot'} size={13} />
              </span>
              {!last && <span style={{ flex: 1, width: 1, background: 'var(--border-default)', minHeight: 12 }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : 'var(--space-6)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <p style={{ font: 'var(--fw-medium) var(--fs-body-sm)/1.45 var(--font-sans)', color: 'var(--text-heading)' }}>{it.title}</p>
                {it.date && <span style={{ font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-mono)', color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' }}>{it.date}</span>}
              </div>
              {it.description && <p style={{ marginTop: 3, font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-body)', maxWidth: '68ch' }}>{it.description}</p>}
              {it.meta && <p style={{ marginTop: 5, font: 'var(--fw-regular) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-muted)' }}>{it.meta}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
