import avatarStack from '../../../assets/icons/avatar-stack.svg';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { KeyValueList, type KeyValueItem } from '../../components/KeyValueList/KeyValueList';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { StickyFooter } from '../../components/StickyFooter/StickyFooter';
import './TournamentDetails.css';

export interface TournamentDetailsProps {
  balance: string;
  title: string;
  startsIn: string;
  joined: string;
  startTime: string;
  duration: string;
  questions: number;
  entryFee: number;
  maxReward: number;
  maxRewardNote: string;
  rewards: KeyValueItem[];
  rules: string[];
  onBack?: () => void;
  onRegister?: () => void;
}

export const TournamentDetails = ({
  balance,
  title,
  startsIn,
  joined,
  startTime,
  duration,
  questions,
  entryFee,
  maxReward,
  maxRewardNote,
  rewards,
  rules,
  onBack,
  onRegister,
}: TournamentDetailsProps) => (
  <div className="pv-screen">
    <AppHeader title="Tournament Details" variant="sub" balance={balance} onBack={onBack} centered />
    <main className="pv-screen__body pv-details">
      <div className="pv-details__hero">
        <div className="pv-details__art" aria-hidden />
        <div className="pv-details__hero-text">
          <span className="pv-details__badge">STARTS IN {startsIn}</span>
          <h2 className="pv-details__title">{title}</h2>
        </div>
      </div>

      <div className="pv-details__players">
        <img src={avatarStack} alt="" width={52} height={22} />
        <span>{joined} players joined</span>
      </div>

      <section className="pv-details__info">
        <dl className="pv-details__stats">
          <div><dt>Start time</dt><dd>{startTime}</dd></div>
          <div><dt>Duration</dt><dd>{duration}</dd></div>
          <div><dt>Questions</dt><dd>{questions}</dd></div>
        </dl>
        <hr className="pv-details__rule" />
        <div className="pv-details__boxes">
          <div className="pv-details__box">
            <span className="pv-details__box-label">ENTRY COST</span>
            <span className="pv-details__box-value">{entryFee} Coins</span>
            <span className="pv-details__box-note">Virtual only · no cash value</span>
          </div>
          <div className="pv-details__box">
            <span className="pv-details__box-label">MAX REWARD</span>
            <span className="pv-details__box-value">{maxReward} Coins</span>
            <span className="pv-details__box-note">{maxRewardNote}</span>
          </div>
        </div>
      </section>

      <SectionHeader title="Reward breakdown" />
      <KeyValueList items={rewards} strongLabels />

      <SectionHeader title="Full rules" tone="muted" />
      <ul className="pv-details__rules">
        {rules.map((rule) => (
          <li key={rule}>{rule}</li>
        ))}
      </ul>
    </main>
    <StickyFooter gap={8}>
      <PrimaryButton label={`Register — ${entryFee} Coins`} onClick={onRegister} />
      <p className="pv-details__footnote">Virtual coins only · no real money involved</p>
    </StickyFooter>
  </div>
);
