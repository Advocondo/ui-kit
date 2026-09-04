import type { CSSProperties } from 'react';

export interface TabItem { id: string; label: string; count?: number }

/** Underlined tab strip for switching views inside a page (2px navy indicator). */
export interface TabsProps {
  items?: TabItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  style?: CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
