import type { CSSProperties } from 'react';

export interface BreadcrumbItem { id?: string; label: string }

/** Trail above a TopBar title; the last item is the current page and is not a link. */
export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  onNavigate?: (id: string) => void;
  style?: CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
