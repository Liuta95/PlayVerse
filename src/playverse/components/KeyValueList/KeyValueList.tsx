import { Fragment } from 'react';
import './KeyValueList.css';

export interface KeyValueItem {
  label: string;
  value: string;
  tone?: 'default' | 'gold' | 'success';
}

export interface KeyValueListProps {
  items: KeyValueItem[];
  /**
   * table: row-per-item card with dividers (Session Summary, Reward Breakdown)
   * boxed: compact inset box (cost summaries in sheets)
   */
  variant?: 'table' | 'boxed';
  /** boxed only: hairline between rows */
  dividers?: boolean;
  /** table only: bold, full-contrast labels */
  strongLabels?: boolean;
}

export const KeyValueList = ({ items, variant = 'table', dividers = false, strongLabels = false }: KeyValueListProps) => (
  <dl
    className={[
      'pv-kv',
      `pv-kv--${variant}`,
      strongLabels && 'pv-kv--strong',
    ].filter(Boolean).join(' ')}
  >
    {items.map(({ label, value, tone = 'default' }, i) => (
      <Fragment key={label}>
        {variant === 'boxed' && dividers && i > 0 && <hr className="pv-kv__divider" />}
        <div className="pv-kv__row">
          <dt>{label}</dt>
          <dd className={`pv-kv__value--${tone}`}>{value}</dd>
        </div>
      </Fragment>
    ))}
  </dl>
);
