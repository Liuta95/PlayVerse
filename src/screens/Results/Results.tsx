import flame from '../../assets/icons/flame.svg';
import rankUp from '../../assets/icons/rank-up.svg';
import { AppHeader } from '../../components/AppHeader';
import { Pill } from '../../components/Pill';
import { PrimaryButton } from '../../components/PrimaryButton';
import { StatTile } from '../../components/StatTile';
import { StickyFooter } from '../../components/StickyFooter';
import { TextButton } from '../../components/TextButton';
import './Results.css';

export interface ResultsProps {
  balance: string;
  correct: number;
  total: number;
  percentile: string;
  coins: number;
  xp: number;
  rankBefore: number;
  rankAfter: number;
  streakDays?: number;
  summary: string;
  onClaim?: () => void;
  onLeaderboard?: () => void;
  onBreak?: () => void;
}

export const Results = ({
  balance,
  correct,
  total,
  percentile,
  coins,
  xp,
  rankBefore,
  rankAfter,
  streakDays,
  summary,
  onClaim,
  onLeaderboard,
  onBreak,
}: ResultsProps) => (
  <div className="pv-screen">
    <AppHeader title="Results" variant="sub" balance={balance} />
    <main className="pv-screen__body pv-results">
      <div className="pv-results__score">
        <span className="pv-results__label">YOUR SCORE</span>
        <span className="pv-results__value">
          {correct}/{total}
        </span>
        <span className="pv-results__percentile">{percentile}</span>
      </div>
      <div className="pv-results__tiles">
        <StatTile value={`+${coins}`} label="Coins" tone="gold" />
        <StatTile value={`+${xp}`} label="XP" tone="xp" />
      </div>
      <section className="pv-results__rank">
        <div className="pv-results__rank-text">
          <span>Season rank</span>
          <strong>
            #{rankBefore} → #{rankAfter}
          </strong>
        </div>
        <div className="pv-results__rank-meta">
          {streakDays && <Pill label={`${streakDays}-day streak`} tone="streak" size="sm" icon={flame} />}
          {rankAfter < rankBefore && <img src={rankUp} alt="Rank up" width={22} height={22} />}
        </div>
      </section>
      <p className="pv-results__summary">{summary}</p>
    </main>
    <StickyFooter gap={12}>
      <PrimaryButton label="Claim Reward" onClick={onClaim} />
      <div className="pv-results__links">
        <TextButton label="View Leaderboard" size="sm" onClick={onLeaderboard} />
        <span className="pv-results__divider" aria-hidden />
        <TextButton label="Take a break" size="sm" onClick={onBreak} />
      </div>
    </StickyFooter>
  </div>
);
