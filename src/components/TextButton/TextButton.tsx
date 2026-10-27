import './TextButton.css';

export interface TextButtonProps {
  label: string;
  /** md 14px · sm 13px */
  size?: 'md' | 'sm';
  tone?: 'secondary' | 'muted';
  onClick?: () => void;
}

export const TextButton = ({ label, size = 'md', tone = 'secondary', onClick }: TextButtonProps) => (
  <button type="button" className={`pv-text-button pv-text-button--${size} pv-text-button--${tone}`} onClick={onClick}>
    {label}
  </button>
);
