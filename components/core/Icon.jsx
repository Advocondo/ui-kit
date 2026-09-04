import React from 'react';

const pascal = (n) => n.replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

/** Thin wrapper over the Lucide icon set (window.lucide, loaded from CDN).
 *  Renders nothing but a reserved box when the set has not loaded yet. */
export function Icon({ name, size = 18, strokeWidth = 1.75, style, ...rest }) {
  const set = (typeof window !== 'undefined' && window.lucide && window.lucide.icons) || null;
  const node = set ? (set[pascal(name)] || set[name]) : null;
  const box = { width: size, height: size, flex: '0 0 auto', display: 'inline-block' };
  // Unresolved name (icon set not loaded yet, or a deprecated brand glyph): draw a neutral
  // placeholder ring rather than a blank gap, so a missing glyph is visible in review.
  if (!node) return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} aria-hidden="true" style={{ ...box, opacity: set ? 0.5 : 0, ...style }} {...rest}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
  const children = typeof node[0] === 'string' ? node[2] || [] : node;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" style={{ ...box, ...style }} {...rest}>
      {children.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
