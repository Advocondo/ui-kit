import React from 'react';

const BASE = 'assets/';

export function Logo({ variant = 'lockup', height = 56, base = BASE, onNavy = true, style, ...rest }) {
  if (variant === 'wordmark') {
    return (
      <span style={{ display: 'inline-grid', justifyItems: 'center', gap: 2, color: onNavy ? 'var(--stone-0)' : 'var(--navy-900)', ...style }} {...rest}>
        <span style={{ fontFamily: 'var(--font-logotype)', fontWeight: 'var(--fw-semibold)', fontSize: height * 0.42, letterSpacing: 'var(--ls-logotype)', lineHeight: 1.1, textTransform: 'uppercase' }}>Edson Alexandre</span>
        <span style={{ fontFamily: 'var(--font-logotype)', fontWeight: 'var(--fw-regular)', fontSize: height * 0.2, letterSpacing: '.34em', lineHeight: 1, textTransform: 'uppercase', opacity: .82 }}>Advogados</span>
      </span>
    );
  }
  const src = base + (variant === 'mark'
    ? (onNavy ? 'logo-mark-white.png' : 'logo-mark-navy.png')
    : (onNavy ? 'logo-lockup-white.png' : 'logo-lockup-navy.png'));
  return <img src={src} alt="Edson Alexandre Advogados" style={{ height, width: 'auto', display: 'block', ...style }} {...rest} />;
}
