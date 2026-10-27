import lobby from '../../../assets/icons/nav-lobby.svg';
import lobbyActive from '../../../assets/icons/nav-lobby-active.svg';
import leaderboard from '../../../assets/icons/nav-leaderboard.svg';
import leaderboardActive from '../../../assets/icons/nav-leaderboard-active.svg';
import wallet from '../../../assets/icons/nav-wallet.svg';
import walletActive from '../../../assets/icons/nav-wallet-active.svg';
import './BottomNavBar.css';

export type NavTab = 'Lobby' | 'Leaderboard' | 'Wallet';

const tabs: { id: NavTab; icon: string; activeIcon: string }[] = [
  { id: 'Lobby', icon: lobby, activeIcon: lobbyActive },
  { id: 'Leaderboard', icon: leaderboard, activeIcon: leaderboardActive },
  { id: 'Wallet', icon: wallet, activeIcon: walletActive },
];

export interface BottomNavBarProps {
  active: NavTab;
  onChange?: (tab: NavTab) => void;
}

export const BottomNavBar = ({ active, onChange }: BottomNavBarProps) => (
  <nav className="pv-bottom-nav" aria-label="Main">
    {tabs.map(({ id, icon, activeIcon }) => {
      const isActive = id === active;
      return (
        <button
          key={id}
          type="button"
          className={`pv-bottom-nav__tab${isActive ? ' pv-bottom-nav__tab--active' : ''}`}
          aria-current={isActive ? 'page' : undefined}
          onClick={() => onChange?.(id)}
        >
          <img src={isActive ? activeIcon : icon} alt="" width={20} height={20} />
          {id}
        </button>
      );
    })}
  </nav>
);
