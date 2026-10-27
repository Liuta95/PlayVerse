import { AppHeader } from '../../components/AppHeader/AppHeader';
import { KeyValueList, type KeyValueItem } from '../../components/KeyValueList/KeyValueList';
import { PrimaryButton } from '../../components/PrimaryButton/PrimaryButton';
import { StickyFooter } from '../../components/StickyFooter/StickyFooter';
import { TextButton } from '../../components/TextButton/TextButton';
import './SessionSummary.css';

export interface SessionSummaryProps {
  stats: KeyValueItem[];
  /** e.g. "Today, 8:14 PM" */
  endedAt: string;
  onLobby?: () => void;
  onWallet?: () => void;
}

export const SessionSummary = ({ stats, endedAt, onLobby, onWallet }: SessionSummaryProps) => (
  <div className="pv-screen">
    <AppHeader title="Session Summary" variant="sub" />
    <main className="pv-screen__body pv-summary">
      <p className="pv-summary__intro">A plain record of this session — no scores to chase, just the facts.</p>
      <KeyValueList items={stats} />
      <p className="pv-summary__time">{endedAt}</p>
      <p className="pv-summary__note">You’re all caught up. Come back anytime — there’s no rush.</p>
    </main>
    <StickyFooter gap={10}>
      <PrimaryButton label="Back to Lobby" onClick={onLobby} />
      <TextButton label="View Wallet" size="sm" onClick={onWallet} />
    </StickyFooter>
  </div>
);
