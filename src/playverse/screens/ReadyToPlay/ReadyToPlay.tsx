import checkLarge from '../../../assets/icons/check-large.svg';
import closeIcon from '../../../assets/icons/close.svg';
import { IconBadge } from '../../components/IconBadge/IconBadge';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { TextButton } from '../../components/TextButton/TextButton';
import './ReadyToPlay.css';

export interface ReadyToPlayProps {
  tournament: string;
  /** Countdown text, e.g. "12:00" */
  startsIn: string;
  onStart?: () => void;
  onBrowse?: () => void;
  onClose?: () => void;
}

export const ReadyToPlay = ({ tournament, startsIn, onStart, onBrowse, onClose }: ReadyToPlayProps) => (
  <div className="pv-screen">
    <div className="pv-ready__top">
      <button type="button" aria-label="Close" onClick={onClose}>
        <img src={closeIcon} alt="" width={20} height={20} />
      </button>
    </div>
    <main className="pv-ready">
      <IconBadge icon={checkLarge} iconSize={34} size={80} tone="accent" outlined />
      <h1 className="pv-ready__title">You’re in!</h1>
      <p className="pv-ready__tournament">{tournament}</p>
      <p className="pv-ready__label">QUIZ STARTS IN</p>
      <p className="pv-ready__countdown" role="timer">{startsIn}</p>
      <PrimaryButton label="Start Quiz" fullWidth onClick={onStart} />
      <div className="pv-ready__browse">
        <TextButton label="Browse Lobby while you wait" onClick={onBrowse} />
      </div>
    </main>
  </div>
);
