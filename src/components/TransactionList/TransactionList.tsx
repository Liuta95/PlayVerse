import './TransactionList.css';

export interface Transaction {
  title: string;
  /** e.g. "Today, 8:42 PM" */
  time: string;
  /** Signed coin amount */
  amount: number;
}

export interface TransactionListProps {
  items: Transaction[];
}

export const TransactionList = ({ items }: TransactionListProps) => (
  <ul className="pv-transactions">
    {items.map(({ title, time, amount }) => (
      <li key={`${title}-${time}`} className="pv-transactions__row">
        <div className="pv-transactions__text">
          <span className="pv-transactions__title">{title}</span>
          <span className="pv-transactions__time">{time}</span>
        </div>
        <span className={`pv-transactions__amount ${amount >= 0 ? 'is-credit' : 'is-debit'}`}>
          {amount >= 0 ? `+${amount}` : `−${Math.abs(amount)}`}
        </span>
      </li>
    ))}
  </ul>
);
