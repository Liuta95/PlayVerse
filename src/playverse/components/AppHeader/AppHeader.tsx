import backIcon from '../../../assets/icons/back.svg';
import { CoinChip } from '../CoinChip/CoinChip';
import './AppHeader.css';

export interface AppHeaderProps {
  title: string;
  /** Coin balance; omit to hide the chip (e.g. on Wallet) */
  balance?: string;
  /** brand 19px (Lobby) · page 18px (tab roots) · sub 16px (inner screens) */
  variant?: 'brand' | 'page' | 'sub';
  /** Shows a back chevron */
  onBack?: () => void;
  /** Centers the title between the back button and the chip */
  centered?: boolean;
}

export const AppHeader = ({ title, balance, variant = 'brand', onBack, centered = false }: AppHeaderProps) => (
  <header
    className={[
      'pv-app-header',
      onBack && 'pv-app-header--back',
      centered && 'pv-app-header--centered',
    ].filter(Boolean).join(' ')}
  >
    {onBack && (
      <button type="button" className="pv-app-header__back" aria-label="Back" onClick={onBack}>
        <img src={backIcon} alt="" width={20} height={20} />
      </button>
    )}
    <h1 className={`pv-app-header__title pv-app-header__title--${variant}`}>{title}</h1>
    {balance && <CoinChip balance={balance} />}
  </header>
);
