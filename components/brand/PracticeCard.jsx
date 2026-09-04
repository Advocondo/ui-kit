import React from 'react';

export function PracticeCard({ title, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid', gap: 'var(--space-3)', textAlign: 'center', padding: 'var(--space-6) var(--space-5)',
        background: 'var(--stone-200)', borderRadius: 'var(--radius-md)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-card-site)',
        transition: 'box-shadow var(--dur-normal) var(--ease-standard)', ...style
      }} {...rest}>
      <h3 style={{ font: 'var(--fw-bold) var(--fs-h3)/1.3 var(--font-sans)', textTransform: 'uppercase', letterSpacing: '.01em', color: 'var(--navy-900)' }}>{title}</h3>
      <p style={{ font: 'var(--fw-light) var(--fs-body-sm)/1.7 var(--font-sans)', color: 'var(--stone-700)' }}>{children}</p>
    </article>
  );
}
