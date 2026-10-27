import type { CSSProperties } from 'react';
import './IconBadge.css';

export interface IconBadgeProps {
  icon: string;
  /** Icon's own size in px — kept from the Figma asset */
  iconSize: number;
  /** Circle diameter in px */
  size: number;
  tone?: 'accent' | 'gold' | 'danger' | 'neutral';
  /** accent: 2px accent ring · neutral: 1px strong border */
  outlined?: boolean;
}

export const IconBadge = ({ icon, iconSize, size, tone = 'neutral', outlined = false }: IconBadgeProps) => (
  <span
    className={['pv-icon-badge', `pv-icon-badge--${tone}`, outlined && 'pv-icon-badge--outlined'].filter(Boolean).join(' ')}
    style={{ '--pv-badge-size': `${size}px` } as CSSProperties}
    aria-hidden
  >
    <img src={icon} alt="" width={iconSize} height={iconSize} />
  </span>
);
