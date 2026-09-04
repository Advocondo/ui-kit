import type { CSSProperties, ReactNode } from 'react';

export interface SidebarNavItem {
  /** Stable id compared against `activeId`. */
  id?: string;
  label?: string;
  /** Lucide icon name. */
  icon?: string;
  /** Trailing count badge. */
  count?: number;
  /** When set, the entry renders as an uppercase section heading instead of a link. */
  section?: string;
}

/**
 * Fixed 248px navy sidebar — the platform's primary navigation.
 * Active items carry a 2px light left marker.
 * @startingPoint section="Navigation" subtitle="Navegação lateral da plataforma" viewport="700x420"
 */
export interface SidebarNavProps {
  items?: SidebarNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Brand lockup slot at the top. */
  header?: ReactNode;
  /** User/account slot at the bottom. */
  footer?: ReactNode;
  style?: CSSProperties;
}
export function SidebarNav(props: SidebarNavProps): JSX.Element;
