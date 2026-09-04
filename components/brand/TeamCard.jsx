import React from 'react';

export function TeamCard({ name, role, photo, width = 132, style, ...rest }) {
  return (
    <figure style={{ margin: 0, width, display: 'grid', gap: 'var(--space-3)', ...style }} {...rest}>
      <div style={{ width, aspectRatio: '3 / 4', background: 'var(--navy-800)', overflow: 'hidden' }}>
        {photo && <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
      </div>
      <figcaption style={{ textAlign: 'center' }}>
        <p style={{ font: 'var(--fw-semibold) var(--fs-body-sm)/1.35 var(--font-sans)', color: 'var(--text-on-inverse)' }}>{name}</p>
        {role && <p style={{ marginTop: 1, font: 'var(--fw-light) var(--fs-caption)/1.4 var(--font-sans)', color: 'var(--text-on-inverse-muted)' }}>{role}</p>}
      </figcaption>
    </figure>
  );
}
