'use client';

import type { HTMLAttributes } from 'react';

export interface TeamCardProps extends HTMLAttributes<HTMLElement> {
  name?: string;
  /** e.g. "Advogado Sócio". */
  role?: string;
  /** Image URL. */
  photo?: string;
  /** Card width in px; height follows 3:4. @default 132 */
  width?: number;
}

/**
 * A team member as the site presents them: hard-edged 3:4 portrait crop, no radius, no scrim,
 * bold sans name and muted role below. Designed for the navy field. Used in the
 * "CONHEÇA NOSSA EQUIPE" row; place several in a horizontal flex with a small gap.
 *
 * @example
 * <TeamCard name="Dr. Edson Alexandre" role="Advogado Sócio" photo="../../assets/team/edson-alexandre.png" />
 */
export function TeamCard({ name, role, photo, width = 132, style, ...rest }: TeamCardProps) {
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
