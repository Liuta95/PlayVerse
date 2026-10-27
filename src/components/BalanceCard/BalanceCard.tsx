import coinLarge from '../../assets/icons/coin-large.svg';
import './BalanceCard.css';

export interface BalanceCardProps {
  /** Formatted balance, e.g. "1,230" */
  balance: string;
  note?: string;
}

export const BalanceCard = ({ balance, note }: BalanceCardProps) => (
  <section className="pv-balance-card" aria-label="Coin balance">
    <span className="pv-balance-card__label">Coin balance</span>
    <div className="pv-balance-card__amount">
      <img src={coinLarge} alt="" width={30} height={30} />
      <span>{balance}</span>
    </div>
    {note && <p className="pv-balance-card__note">{note}</p>}
  </section>
);
