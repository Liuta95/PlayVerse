import type { HTMLAttributes, ReactNode } from 'react';
import './Chip.css';

export type ChipVariant = 'neutral' | 'success' | 'danger' | 'info' | 'warning' | 'caution';

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Figma "Type". Picks the `chips.<variant>.bg` and `chips.<variant>.text` tokens. */
  variant?: ChipVariant;
  children: ReactNode;
}

/** Static status label. It is not interactive: use a Button for anything clickable. */
export function Chip({ variant = 'neutral', className, children, ...rest }: ChipProps) {
  const classes = ['pv-chip', `pv-chip--${variant}`, className].filter(Boolean).join(' ');
  return (
    <span {...rest} className={classes}>
      {children}
    </span>
  );
}
