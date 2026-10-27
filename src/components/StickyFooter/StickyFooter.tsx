import type { ReactNode } from 'react';
import './StickyFooter.css';

export interface StickyFooterProps {
  children: ReactNode;
  /** Space between the footer's rows, in px */
  gap?: number;
}

/** Action bar pinned under a screen's scrolling content. */
export const StickyFooter = ({ children, gap = 10 }: StickyFooterProps) => (
  <footer className="pv-sticky-footer" style={{ gap }}>
    {children}
  </footer>
);
