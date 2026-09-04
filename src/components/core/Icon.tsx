'use client';

import { icons, type LucideProps } from 'lucide-react';

function pascalCase(name: string): string {
  return name.replace(/(^|[-_ ])(\w)/g, (_match, _sep, chr: string) => chr.toUpperCase());
}

export interface IconProps extends LucideProps {
  /** Lucide icon name, kebab-case (e.g. "message-circle", "layout-dashboard"). */
  name: string;
}

/**
 * Thin wrapper over `lucide-react`, looked up by kebab-case `name` so every other
 * component in this library can take an `icon="plus"`-style string prop instead of
 * importing an icon component directly.
 *
 * `lucide-react`'s `icons` map ships every icon in one object — simplest for a
 * name-driven API, at the cost of not tree-shaking to only the icons actually used.
 * For a bundle-size-sensitive surface, swap this implementation for `DynamicIcon`
 * from `lucide-react/dynamic` (async, code-split per icon) — see LIBRARY.md.
 *
 * Renders a faint placeholder ring instead of nothing when `name` doesn't resolve
 * (a typo, or a deprecated brand glyph) — a missing icon stays visible in review
 * instead of silently leaving a gap.
 *
 * @example
 * <Icon name="message-circle" size={16} />
 */
export function Icon({ name, size = 18, strokeWidth = 1.75, ...rest }: IconProps) {
  const LucideIcon = icons[pascalCase(name) as keyof typeof icons];
  if (!LucideIcon) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        aria-hidden="true"
        style={{ width: size, height: size, flex: '0 0 auto', display: 'inline-block', opacity: 0.5 }}
      >
        <circle cx="12" cy="12" r="9" />
      </svg>
    );
  }
  return <LucideIcon size={size} strokeWidth={strokeWidth} {...rest} />;
}
