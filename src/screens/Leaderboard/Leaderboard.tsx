import { useState } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { BottomNavBar } from '../../components/BottomNavBar';
import { SectionHeader } from '../../components/SectionHeader';
import { SegmentedControl } from '../../components/SegmentedControl';
import { StandingsList, type Standing } from '../../components/StandingsList';
import { TierProgress } from '../../components/TierProgress';
import './Leaderboard.css';

const scopes = ['Global', 'Friends'] as const;
type Scope = (typeof scopes)[number];

export interface LeaderboardProps {
  balance: string;
  tier: string;
  tierPoints: number;
  tierMax: number;
  standings: Record<Scope, Standing[]>;
}

export const Leaderboard = ({ balance, tier, tierPoints, tierMax, standings }: LeaderboardProps) => {
  const [scope, setScope] = useState<Scope>('Global');
  return (
    <div className="pv-screen">
      <AppHeader title="Leaderboard" variant="page" balance={balance} />
      <main className="pv-screen__body pv-leaderboard">
        <SegmentedControl options={scopes} value={scope} onChange={setScope} aria-label="Leaderboard scope" />
        <TierProgress tier={tier} value={tierPoints} max={tierMax} />
        <SectionHeader title="Season standings" />
        <StandingsList entries={standings[scope]} />
      </main>
      <BottomNavBar active="Leaderboard" />
    </div>
  );
};
