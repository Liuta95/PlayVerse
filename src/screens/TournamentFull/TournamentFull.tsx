import users from '../../assets/icons/users.svg';
import { AppHeader } from '../../components/AppHeader';
import { EmptyState } from '../../components/EmptyState';
import { IconBadge } from '../../components/IconBadge';
import { TextButton } from '../../components/TextButton';
import { TournamentCard, type TournamentCardProps } from '../../components/TournamentCard';
import './TournamentFull.css';

export interface TournamentFullProps {
  tournament: string;
  /** Alternatives to suggest; the first is highlighted */
  suggestions: Pick<TournamentCardProps, 'title' | 'startsIn' | 'entryFee'>[];
  onBack?: () => void;
}

export const TournamentFull = ({ tournament, suggestions, onBack }: TournamentFullProps) => (
  <div className="pv-screen">
    <AppHeader title="Tournament Details" variant="sub" onBack={onBack} />
    <main className="pv-screen__body pv-full">
      <EmptyState
        icon={<IconBadge icon={users} iconSize={28} size={64} outlined />}
        title="This tournament is full"
        description={`${tournament} has reached its player limit. Try one of these instead:`}
      />
      <div className="pv-full__suggestions">
        {suggestions.map((s, i) => (
          <TournamentCard key={s.title} {...s} compact featured={i === 0} />
        ))}
      </div>
      <TextButton label="Back to Lobby" onClick={onBack} />
    </main>
  </div>
);
