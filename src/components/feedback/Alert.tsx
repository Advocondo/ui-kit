'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../core/Icon';

export type AlertTone = 'info' | 'ok' | 'warn' | 'risk';

const TONE: Record<AlertTone, [fg: string, bg: string, border: string, icon: string]> = {
  info: ['var(--status-info-fg)', 'var(--status-info-bg)', 'var(--status-info-border)', 'info'],
  ok: ['var(--status-ok-fg)', 'var(--status-ok-bg)', 'var(--status-ok-border)', 'circle-check'],
  warn: ['var(--status-warn-fg)', 'var(--status-warn-bg)', 'var(--status-warn-border)', 'triangle-alert'],
  risk: ['var(--status-risk-fg)', 'var(--status-risk-bg)', 'var(--status-risk-border)', 'octagon-alert'],
};

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: AlertTone;
  title?: string;
  /** Usually a ghost <Button />. */
  action?: ReactNode;
  /** Overrides the tone's default Lucide icon. */
  icon?: string;
  /** Renders a close affordance. */
  onClose?: () => void;
}

/**
 * Inline, persistent message inside a page — not a floating notification (use {@link Toast} for that).
 *
 * @example
 * <Alert tone="risk" title="2 prazos fatais vencem em 48 horas"
 *   action={<Button variant="ghost" size="sm">Ver prazos</Button>}>
 *   Processos 0703451-22.2025.8.07.0020 e 0711902-04.2025.8.07.0001.
 * </Alert>
 */
export function Alert({ tone = 'info', title, children, action, icon, onClose, style, ...rest }: AlertProps) {
  const [fg, bg, bd, defaultIcon] = TONE[tone];
  return (
    <div role="status" style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-4)', background: bg, border: `1px solid ${bd}`, borderRadius: 'var(--radius-sm)', ...style }} {...rest}>
      <span style={{ display: 'flex', color: fg, marginTop: 1 }}><Icon name={icon || defaultIcon} size={17} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <p style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.45 var(--font-sans)', color: fg }}>{title}</p>}
        {children && <div style={{ marginTop: title ? 3 : 0, font: 'var(--fw-light) var(--fs-body-sm)/1.6 var(--font-sans)', color: 'var(--text-body)' }}>{children}</div>}
        {action && <div style={{ marginTop: 'var(--space-3)' }}>{action}</div>}
      </div>
      {onClose && (
        <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: fg, display: 'flex', height: 18 }}>
          <Icon name="x" size={16} />
        </button>
      )}
    </div>
  );
}
