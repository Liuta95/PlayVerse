import './StandingsList.css';

export interface Standing {
  rank: number;
  name: string;
  initials: string;
  points: string;
  /** Avatar fill — any CSS colour, usually a token like var(--success) */
  color?: string;
  /** Highlights the current player's row */
  isYou?: boolean;
}

export interface StandingsListProps {
  entries: Standing[];
}

export const StandingsList = ({ entries }: StandingsListProps) => (
  <ol className="pv-standings">
    {entries.map(({ rank, name, initials, points, color = 'var(--border)', isYou = false }) => (
      <li key={rank} className={`pv-standings__row${isYou ? ' is-you' : ''}`} aria-current={isYou || undefined}>
        <span className="pv-standings__rank">{rank}</span>
        <span className="pv-standings__avatar" style={{ background: isYou ? 'var(--accent)' : color }} aria-hidden>
          {isYou ? 'YOU' : initials}
        </span>
        <span className="pv-standings__name">{isYou ? 'You' : name}</span>
        <span className="pv-standings__points">{points} pts</span>
      </li>
    ))}
  </ol>
);
