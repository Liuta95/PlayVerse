import './TournamentCard.css';

export interface TournamentCardProps {
  title: string;
  /** e.g. "5 questions · 15s each"; not shown on compact cards */
  format?: string;
  /** e.g. "00:12:00" */
  startsIn: string;
  entryFee: number;
  /** Featured cards get the accent badge, stronger border and footer row */
  featured?: boolean;
  /** e.g. "1,204" — shown only on featured cards */
  joined?: string;
  /** Smaller suggestion card (Tournament Full state) */
  compact?: boolean;
  onView?: () => void;
}

export const TournamentCard = ({
  title,
  format,
  startsIn,
  entryFee,
  featured = false,
  joined,
  compact = false,
  onView,
}: TournamentCardProps) => (
  <article
    className={[
      'pv-tournament-card',
      featured && 'pv-tournament-card--featured',
      compact && 'pv-tournament-card--compact',
    ].filter(Boolean).join(' ')}
  >
    <div className="pv-tournament-card__top">
      <span className="pv-tournament-card__badge">STARTS IN {startsIn}</span>
      <span className="pv-tournament-card__fee">{entryFee} Coins</span>
    </div>
    <h3 className="pv-tournament-card__title">{title}</h3>
    {format && !compact && <p className="pv-tournament-card__format">{format}</p>}
    {featured && !compact && (
      <div className="pv-tournament-card__footer">
        {joined && <span className="pv-tournament-card__joined">{joined} joined</span>}
        <button type="button" className="pv-tournament-card__view" onClick={onView}>
          View →
        </button>
      </div>
    )}
  </article>
);
