import './Tabs.css';

export interface TabsProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange?: (value: T) => void;
  'aria-label'?: string;
}

/** Underlined text tabs (Wallet: Earned / Spent). */
export const Tabs = <T extends string>({ options, value, onChange, 'aria-label': ariaLabel }: TabsProps<T>) => (
  <div className="pv-tabs" role="tablist" aria-label={ariaLabel}>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        role="tab"
        aria-selected={option === value}
        className={`pv-tabs__tab${option === value ? ' is-active' : ''}`}
        onClick={() => onChange?.(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
