import React from 'react';

const MAP = {
  ativo:      { tone: 'info',    label: 'Ativo' },
  suspenso:   { tone: 'warn',    label: 'Suspenso' },
  arquivado:  { tone: 'neutral', label: 'Arquivado' },
  ganho:      { tone: 'ok',      label: 'Ganho' },
  perdido:    { tone: 'risk',    label: 'Perdido' },
  acordo:     { tone: 'ok',      label: 'Acordo' },
  prazo:      { tone: 'warn',    label: 'Prazo próximo' },
  urgente:    { tone: 'risk',    label: 'Prazo fatal' },
  transitado: { tone: 'neutral', label: 'Trânsito em julgado' }
};
const TONE = {
  neutral: ['var(--status-neutral-fg)', 'var(--status-neutral-bg)', 'var(--status-neutral-border)'],
  ok:      ['var(--status-ok-fg)', 'var(--status-ok-bg)', 'var(--status-ok-border)'],
  warn:    ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'var(--status-warn-border)'],
  risk:    ['var(--status-risk-fg)', 'var(--status-risk-bg)', 'var(--status-risk-border)'],
  info:    ['var(--status-info-fg)', 'var(--status-info-bg)', 'var(--status-info-border)']
};

export function StatusPill({ status = 'ativo', label, tone, dot = true, style, ...rest }) {
  const cfg = MAP[status] || MAP.ativo;
  const [fg, bg, bd] = TONE[tone || cfg.tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px 3px 8px',
      font: 'var(--fw-medium) var(--fs-caption)/1.5 var(--font-sans)',
      color: fg, background: bg, border: '1px solid ' + bd, borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style
    }} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: fg, flex: '0 0 auto' }} />}
      {label || cfg.label}
    </span>
  );
}
