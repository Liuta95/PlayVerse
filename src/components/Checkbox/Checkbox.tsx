import type { ComponentPropsWithRef, ReactNode } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<ComponentPropsWithRef<'input'>, 'type' | 'children'> {
  /** Text next to the box. Without it, pass `aria-label`. */
  label?: ReactNode;
  /** Figma "Error" state. Sets `aria-invalid`. */
  error?: boolean;
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M5.57083 10.0962L2.6721 7.19746L3.08831 6.78125L5.57083 9.26377L10.9117 3.92292L11.3279 4.33912L5.57083 10.0962Z"
      fill="currentColor"
    />
  </svg>
);

/** Checkbox from Figma "Checkboxes" (204:2244). Figma "Status" Active / Inactive = `checked`. */
export function Checkbox({ label, error = false, disabled = false, className, ...rest }: CheckboxProps) {
  const classes = ['pv-checkbox', error && 'pv-checkbox--error', disabled && 'pv-checkbox--disabled', className]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classes}>
      <input
        {...rest}
        type="checkbox"
        className="pv-checkbox__input"
        disabled={disabled}
        aria-invalid={error || undefined}
      />
      <span className="pv-checkbox__box" aria-hidden="true">
        <CheckIcon />
      </span>
      {label && <span className="pv-checkbox__label">{label}</span>}
    </label>
  );
}
