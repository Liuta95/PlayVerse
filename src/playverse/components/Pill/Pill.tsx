import './Pill.css';

export interface PillProps {
  label: string;
  tone?: 'success' | 'danger' | 'streak' | 'neutral';
  /** sm 11px · md 12px · lg 14px display (feedback banners) */
  size?: 'sm' | 'md' | 'lg';
  /** Adds a 1px border in the tone colour */
  outlined?: boolean;
  /** Optional 12px icon before the label */
  icon?: string;
}

export const Pill = ({ label, tone = 'neutral', size = 'md', outlined = false, icon }: PillProps) => (
  <span className={['pv-pill', `pv-pill--${tone}`, `pv-pill--${size}`, outlined && 'pv-pill--outlined'].filter(Boolean).join(' ')}>
    {icon && <img src={icon} alt="" width={12} height={12} />}
    {label}
  </span>
);
