'use client';

import type { CSSProperties, HTMLAttributes } from 'react';

export type ProcessoStatus =
  | 'ativo' | 'suspenso' | 'arquivado' | 'ganho' | 'perdido' | 'acordo' | 'prazo' | 'urgente' | 'transitado';
export type StatusPillTone = 'neutral' | 'ok' | 'warn' | 'risk' | 'info';

const STATUS_MAP: Record<ProcessoStatus, { tone: StatusPillTone; label: string }> = {
  ativo: { tone: 'info', label: 'Ativo' },
  suspenso: { tone: 'warn', label: 'Suspenso' },
  arquivado: { tone: 'neutral', label: 'Arquivado' },
  ganho: { tone: 'ok', label: 'Ganho' },
  perdido: { tone: 'risk', label: 'Perdido' },
  acordo: { tone: 'ok', label: 'Acordo' },
  prazo: { tone: 'warn', label: 'Prazo próximo' },
  urgente: { tone: 'risk', label: 'Prazo fatal' },
  transitado: { tone: 'neutral', label: 'Trânsito em julgado' },
};
const TONE: Record<StatusPillTone, [fg: string, bg: string, border: string]> = {
  neutral: ['var(--status-neutral-fg)', 'var(--status-neutral-bg)', 'var(--status-neutral-border)'],
  ok: ['var(--status-ok-fg)', 'var(--status-ok-bg)', 'var(--status-ok-border)'],
  warn: ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'var(--status-warn-border)'],
  risk: ['var(--status-risk-fg)', 'var(--status-risk-bg)', 'var(--status-risk-border)'],
  info: ['var(--status-info-fg)', 'var(--status-info-bg)', 'var(--status-info-border)'],
};

export interface StatusPillProps extends HTMLAttributes<HTMLSpanElement> {
  /** Domain state; sets both label and tone. @default "ativo" */
  status?: ProcessoStatus;
  /** Overrides the default Portuguese label. */
  label?: string;
  /** Overrides the tone implied by `status`. */
  tone?: StatusPillTone;
  /** @default true */
  dot?: boolean;
}

/**
 * Case / prazo state as a dotted pill. The only pill-radius element in the system besides avatars.
 * States: ativo · suspenso · arquivado · ganho · perdido · acordo · prazo · urgente · transitado.
 * Labels are already in pt-BR.
 *
 * @example
 * <StatusPill status="ativo" />
 * <StatusPill status="urgente" />
 * <StatusPill status="acordo" label="Acordo homologado" />
 */
export function StatusPill({ status = 'ativo', label, tone, dot = true, style, ...rest }: StatusPillProps) {
  const cfg = STATUS_MAP[status] ?? STATUS_MAP.ativo;
  const [fg, bg, border] = TONE[tone ?? cfg.tone];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px 3px 8px',
        font: 'var(--fw-medium) var(--fs-caption)/1.5 var(--font-sans)',
        color: fg, background: bg, border: `1px solid ${border}`, borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: fg, flex: '0 0 auto' }} />}
      {label || cfg.label}
    </span>
  );
}
