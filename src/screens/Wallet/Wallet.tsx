import { useState } from 'react';
import { AppHeader } from '../../components/AppHeader';
import { BalanceCard } from '../../components/BalanceCard';
import { BottomNavBar } from '../../components/BottomNavBar';
import { SecondaryButton } from '../../components/SecondaryButton';
import { Tabs } from '../../components/Tabs';
import { TransactionList, type Transaction } from '../../components/TransactionList';
import './Wallet.css';

const views = ['Earned', 'Spent'] as const;
type View = (typeof views)[number];

export interface WalletProps {
  balance: string;
  seasonResetsIn: string;
  transactions: Record<View, Transaction[]>;
  onEarnMore?: () => void;
}

export const Wallet = ({ balance, seasonResetsIn, transactions, onEarnMore }: WalletProps) => {
  const [view, setView] = useState<View>('Earned');
  return (
    <div className="pv-screen">
      <AppHeader title="Wallet" variant="page" />
      <main className="pv-screen__body pv-wallet">
        <BalanceCard balance={balance} note={`Virtual currency · no cash value · season resets in ${seasonResetsIn}`} />
        <SecondaryButton label="Earn More Coins" fullWidth onClick={onEarnMore} />
        <Tabs options={views} value={view} onChange={setView} aria-label="Transactions" />
        <TransactionList items={transactions[view]} />
      </main>
      <BottomNavBar active="Wallet" />
    </div>
  );
};
