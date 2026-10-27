import buzzer from '../../../assets/icons/quiz-buzzer.svg';
import badgeBg from '../../../assets/icons/categories-badge-bg.svg';
import badgeStroke from '../../../assets/icons/categories-badge-stroke.svg';
import calendar from '../../../assets/icons/calendar.svg';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { BottomNavBar } from '../../components/BottomNavBar/BottomNavBar';
import { CategoryChip } from '../../components/CategoryChip/CategoryChip';
import { EmptyState } from '../../components/EmptyState/EmptyState';
import { IconBadge } from '../../components/IconBadge/IconBadge';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SecondaryButton } from '../../components/SecondaryButton/SecondaryButton';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { TournamentCard, type TournamentCardProps } from '../../components/TournamentCard/TournamentCard';
import './Lobby.css';

const CategoriesBadge = () => (
  <span className="pv-lobby__badge" aria-hidden>
    <img className="pv-lobby__badge-layer" src={badgeBg} alt="" />
    <span className="pv-lobby__badge-layer">
      <img className="pv-lobby__badge-stroke" src={badgeStroke} alt="" />
    </span>
    <span className="pv-lobby__badge-mark">?</span>
  </span>
);

export interface LobbyProps {
  balance: string;
  tournaments: TournamentCardProps[];
  categories: string[];
  /** Shown in the empty state when no tournaments are live */
  nextTournament?: { title: string; startsIn: string };
  onRemind?: () => void;
}

export const Lobby = ({ balance, tournaments, categories, nextTournament, onRemind }: LobbyProps) => {
  const isEmpty = tournaments.length === 0;
  return (
    <div className="pv-lobby">
      <AppHeader title="PlayVerse" balance={balance} />
      <main className={`pv-lobby__content${isEmpty ? ' pv-lobby__content--empty' : ''}`}>
        {isEmpty ? (
          <>
            <SearchBar />
            <div className="pv-lobby__empty">
              <EmptyState
                icon={<IconBadge icon={calendar} iconSize={32} size={76} outlined />}
                title="Nothing live right now"
                description={
                  nextTournament
                    ? `The next tournament, ${nextTournament.title}, starts in ${nextTournament.startsIn}.`
                    : 'Check back soon for the next tournament.'
                }
                iconGap={22}
              >
                <div className="pv-lobby__empty-action">
                  <SecondaryButton label="Remind Me" compact onClick={onRemind} />
                </div>
              </EmptyState>
            </div>
          </>
        ) : (
          <>
            <div className="pv-lobby__hero">
              <img src={buzzer} alt="" width={76} height={87} />
            </div>
            <SearchBar />
            <SectionHeader title="Live now" actionLabel="See all" />
            <div className="pv-lobby__cards">
              {tournaments.map((t) => (
                <TournamentCard key={t.title} {...t} />
              ))}
            </div>
            <SectionHeader title="Categories" icon={<CategoriesBadge />} />
            <div className="pv-lobby__chips">
              {categories.map((c) => (
                <CategoryChip key={c} label={c} />
              ))}
            </div>
          </>
        )}
      </main>
      <BottomNavBar active="Lobby" />
    </div>
  );
};
