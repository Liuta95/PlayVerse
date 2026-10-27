import coinIcon from '../../assets/icons/coin.svg';
import './CoinChip.css';

export interface CoinChipProps {
  /** Formatted coin balance, e.g. "1,200" */
  balance: string;
}

export const CoinChip = ({ balance }: CoinChipProps) => (
  <div className="pv-coin-chip" aria-label={`${balance} coins`}>
    <img src={coinIcon} alt="" width={16} height={16} />
    <span>{balance}</span>
  </div>
);
