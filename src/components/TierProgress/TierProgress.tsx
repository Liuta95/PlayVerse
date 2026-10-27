import trophyGold from '../../assets/icons/trophy-gold.svg';
import './TierProgress.css';

export interface TierProgressProps {
  tier: string;
  value: number;
  max: number;
}

export const TierProgress = ({ tier, value, max }: TierProgressProps) => {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="pv-tier-progress">
      <img src={trophyGold} alt="" width={40} height={40} />
      <div className="pv-tier-progress__body">
        <div className="pv-tier-progress__labels">
          <span className="pv-tier-progress__tier">{tier}</span>
          <span className="pv-tier-progress__count">
            {value.toLocaleString('en-US')} / {max.toLocaleString('en-US')}
          </span>
        </div>
        <div className="pv-tier-progress__track" role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
          <span style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
};
