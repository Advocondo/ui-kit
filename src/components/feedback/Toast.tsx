'use client';

import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../core/Icon';

export type ToastTone = 'info' | 'ok' | 'warn' | 'risk';

const ICON: Record<ToastTone, string> = { info: 'info', ok: 'circle-check', warn: 'triangle-alert', risk: 'octagon-alert' };
const ACCENT: Record<ToastTone, string> = { info: 'var(--navy-300)', ok: 'var(--green-300)', warn: 'var(--amber-300)', risk: 'var(--red-300)' };

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: ToastTone;
  title?: string;
  description?: string;
  onClose?: () => void;
}

/**
 * Transient confirmation, navy-on-light so it reads as a system voice. Bottom-right.
 * Confirms an action just taken; auto-dismiss after ~5s in real use.
 *
 * @example
 * <ToastStack>
 *   <Toast tone="ok" title="Prazo cadastrado" description="Contestação · 12/09/2026 · Dr. Edson Alexandre" onClose={hide} />
 * </ToastStack>
 */
export function Toast({ tone = 'info', title, description, onClose, style, ...rest }: ToastProps) {
  return (
    <div
      role="alert"
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
        minWidth: 300, maxWidth: 420, padding: 'var(--space-4)',
        background: 'var(--navy-900)', color: 'var(--text-on-inverse)',
        border: '1px solid var(--border-inverse)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'flex', color: ACCENT[tone], marginTop: 1 }}><Icon name={ICON[tone]} size={17} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ font: 'var(--fw-medium) var(--fs-body-sm)/1.45 var(--font-sans)' }}>{title}</p>
        {description && <p style={{ marginTop: 2, font: 'var(--fw-light) var(--fs-caption)/1.55 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{description}</p>}
      </div>
      {onClose && (
        <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-on-inverse-muted)', display: 'flex', height: 18 }}>
          <Icon name="x" size={15} />
        </button>
      )}
    </div>
  );
}

export interface ToastStackProps {
  children?: ReactNode;
  style?: CSSProperties;
}

/** Fixed bottom-right container for one or more {@link Toast}s. */
export function ToastStack({ children, style }: ToastStackProps) {
  return (
    <div style={{ position: 'fixed', right: 'var(--space-6)', bottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', zIndex: 60, ...style }}>
      {children}
    </div>
  );
}
