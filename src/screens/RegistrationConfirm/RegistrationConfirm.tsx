import closeIcon from '../../assets/icons/close.svg';
import { BottomSheet } from '../../components/BottomSheet';
import { KeyValueList } from '../../components/KeyValueList';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TextButton } from '../../components/TextButton';
import './RegistrationConfirm.css';

export interface RegistrationConfirmProps {
  title: string;
  format: string;
  entryFee: number;
  balance: number;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const fmt = (n: number) => n.toLocaleString('en-US');

export const RegistrationConfirm = ({ title, format, entryFee, balance, onConfirm, onCancel }: RegistrationConfirmProps) => (
  <div className="pv-screen">
    <BottomSheet onDismiss={onCancel} aria-label="Confirm entry">
      {/* Figma: "Ticket illustration" placeholder slot */}
      <div className="pv-register__art">
        Ticket
        <br />
        illustration
      </div>
      <div className="pv-register__heading">
        <h2>Confirm entry</h2>
        <button type="button" aria-label="Close" onClick={onCancel}>
          <img src={closeIcon} alt="" width={20} height={20} />
        </button>
      </div>
      <p className="pv-register__summary">
        {title} · {format}
      </p>
      <KeyValueList
        variant="boxed"
        dividers
        items={[
          { label: 'Entry cost', value: `−${entryFee} Coins`, tone: 'gold' },
          { label: 'Balance after', value: `${fmt(balance)} → ${fmt(balance - entryFee)} Coins` },
        ]}
      />
      <p className="pv-register__note">Virtual coins only · no real-money value</p>
      <PrimaryButton label="Confirm Entry" onClick={onConfirm} />
      <div className="pv-register__cancel">
        <TextButton label="Cancel" onClick={onCancel} />
      </div>
    </BottomSheet>
  </div>
);
