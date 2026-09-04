import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ICON = { info: 'info', ok: 'circle-check', warn: 'triangle-alert', risk: 'octagon-alert' };
const ACCENT = { info: 'var(--navy-300)', ok: 'var(--green-300)', warn: 'var(--amber-300)', risk: 'var(--red-300)' };

export function Toast({ tone = 'info', title, description, onClose, style, ...rest }) {
  return (
    <div role="alert" style={{
      display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
      minWidth: 300, maxWidth: 420, padding: 'var(--space-4)',
      background: 'var(--navy-900)', color: 'var(--text-on-inverse)',
      border: '1px solid var(--border-inverse)', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-lg)', ...style
    }} {...rest}>
      <span style={{ display: 'flex', color: ACCENT[tone], marginTop: 1 }}><Icon name={ICON[tone]} size={17} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ font: 'var(--fw-medium) var(--fs-body-sm)/1.45 var(--font-sans)' }}>{title}</p>
        {description && <p style={{ marginTop: 2, font: 'var(--fw-light) var(--fs-caption)/1.55 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{description}</p>}
      </div>
      {onClose && <button type="button" aria-label="Fechar" onClick={onClose} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'var(--text-on-inverse-muted)', display: 'flex', height: 18 }}><Icon name="x" size={15} /></button>}
    </div>
  );
}

export function ToastStack({ children, style }) {
  return <div style={{ position: 'fixed', right: 'var(--space-6)', bottom: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', zIndex: 60, ...style }}>{children}</div>;
}
