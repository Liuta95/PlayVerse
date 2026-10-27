import './SegmentedControl.css';

export interface SegmentedControlProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange?: (value: T) => void;
  'aria-label'?: string;
}

export const SegmentedControl = <T extends string>({ options, value, onChange, 'aria-label': ariaLabel }: SegmentedControlProps<T>) => (
  <div className="pv-segmented" role="tablist" aria-label={ariaLabel}>
    {options.map((option) => (
      <button
        key={option}
        type="button"
        role="tab"
        aria-selected={option === value}
        className={`pv-segmented__option${option === value ? ' is-active' : ''}`}
        onClick={() => onChange?.(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
