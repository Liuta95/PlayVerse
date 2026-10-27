import './StatTile.css';

export interface StatTileProps {
  /** e.g. "+80" */
  value: string;
  /** e.g. "Coins" */
  label: string;
  tone?: 'gold' | 'xp';
}

export const StatTile = ({ value, label, tone = 'gold' }: StatTileProps) => (
  <div className={`pv-stat-tile pv-stat-tile--${tone}`}>
    <span className="pv-stat-tile__value">{value}</span>
    <span className="pv-stat-tile__label">{label}</span>
  </div>
);
