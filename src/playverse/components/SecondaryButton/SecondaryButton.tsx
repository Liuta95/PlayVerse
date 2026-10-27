import type { ButtonHTMLAttributes } from 'react';
import './SecondaryButton.css';

export interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  /** Stretch to the container width; otherwise hugs the label */
  fullWidth?: boolean;
  /** 12px radius instead of 14px (used inside dialogs and empty states) */
  compact?: boolean;
}

export const SecondaryButton = ({ label, fullWidth = false, compact = false, className = '', ...props }: SecondaryButtonProps) => (
  <button
    type="button"
    className={[
      'pv-secondary-button',
      fullWidth ? 'pv-secondary-button--full' : 'pv-secondary-button--hug',
      compact && 'pv-secondary-button--compact',
      className,
    ].filter(Boolean).join(' ')}
    {...props}
  >
    {label}
  </button>
);
