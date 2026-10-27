import type { ButtonHTMLAttributes } from 'react';
import './PrimaryButton.css';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  /** Stretch to the container width instead of the default 342px */
  fullWidth?: boolean;
}

export const PrimaryButton = ({ label, fullWidth = false, className = '', ...props }: PrimaryButtonProps) => (
  <button
    type="button"
    className={['pv-primary-button', fullWidth && 'pv-primary-button--full', className].filter(Boolean).join(' ')}
    {...props}
  >
    {label}
  </button>
);
