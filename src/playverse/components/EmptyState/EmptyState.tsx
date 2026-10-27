import type { CSSProperties, ReactNode } from 'react';
import './EmptyState.css';

export interface EmptyStateProps {
  /** Usually an <IconBadge /> */
  icon: ReactNode;
  title: string;
  description: string;
  /** Space between the icon and the title, in px */
  iconGap?: number;
  /** Actions or content below the description */
  children?: ReactNode;
}

export const EmptyState = ({ icon, title, description, iconGap = 20, children }: EmptyStateProps) => (
  <div className="pv-empty-state" style={{ '--pv-empty-gap': `${iconGap}px` } as CSSProperties}>
    {icon}
    <h2 className="pv-empty-state__title">{title}</h2>
    <p className="pv-empty-state__description">{description}</p>
    {children}
  </div>
);
