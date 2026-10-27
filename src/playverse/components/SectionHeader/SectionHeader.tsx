import type { ReactNode } from 'react';
import './SectionHeader.css';

export interface SectionHeaderProps {
  title: string;
  icon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  /** muted is used for low-priority sections like "Full rules" */
  tone?: 'secondary' | 'muted';
}

export const SectionHeader = ({ title, icon, actionLabel, onAction, tone = 'secondary' }: SectionHeaderProps) => (
  <div className="pv-section-header">
    <h2 className={`pv-section-header__title pv-section-header__title--${tone}`}>
      {icon}
      {title}
    </h2>
    {actionLabel && (
      <button type="button" className="pv-section-header__action" onClick={onAction}>
        {actionLabel}
      </button>
    )}
  </div>
);
