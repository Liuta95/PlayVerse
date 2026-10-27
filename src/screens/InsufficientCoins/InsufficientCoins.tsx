import alertGold from '../../assets/icons/alert-gold.svg';
import { BottomSheet } from '../../components/BottomSheet';
import { EmptyState } from '../../components/EmptyState';
import { IconBadge } from '../../components/IconBadge';
import { KeyValueList } from '../../components/KeyValueList';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TextButton } from '../../components/TextButton';
import './InsufficientCoins.css';

export interface InsufficientCoinsProps {
  tournament: string;
  balance: number;
  entryFee: number;
  onEarn?: () => void;
  onBrowse?: () => void;
}

export const InsufficientCoins = ({ tournament, balance, entryFee, onEarn, onBrowse }: InsufficientCoinsProps) => (
  <div className="pv-screen">
    <BottomSheet onDismiss={onBrowse} aria-label="Not enough coins">
      <EmptyState
        icon={<IconBadge icon={alertGold} iconSize={28} size={64} tone="gold" />}
        title="Not enough coins"
        description={`You need ${entryFee - balance} more coins to enter ${tournament}.`}
        iconGap={18}
      >
        <div className="pv-insufficient__summary">
          <KeyValueList
            variant="boxed"
            items={[
              { label: 'Your balance', value: `${balance} Coins` },
              { label: 'Entry cost', value: `${entryFee} Coins` },
            ]}
          />
        </div>
        <PrimaryButton label="Earn Coins" onClick={onEarn} />
        <div className="pv-insufficient__browse">
          <TextButton label="Browse other tournaments" onClick={onBrowse} />
        </div>
      </EmptyState>
    </BottomSheet>
  </div>
);
