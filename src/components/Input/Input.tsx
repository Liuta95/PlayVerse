import { useId, useImperativeHandle, useRef } from 'react';
import type { ComponentPropsWithRef, MouseEvent, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  /** Label above the field. Figma "Label" toggle. */
  label?: ReactNode;
  /** Shows the red asterisk next to the label and sets the native `required`. */
  required?: boolean;
  /** Right side of the label row, e.g. `Available balance: <strong>$12.00</strong>`. Figma "Right helper text". */
  rightText?: ReactNode;
  /** Icon at the start of the field (24px slot). Figma "Left icon". Decorative. */
  iconLeft?: ReactNode;
  /** Icon at the end of the field (24px slot), e.g. a dropdown chevron or a clear icon. Figma "Dropdown". Decorative. */
  iconRight?: ReactNode;
  /** Figma "Error" state. Sets `aria-invalid`. Link a message with `aria-describedby`. */
  error?: boolean;
}

export function Input({
  label,
  required,
  rightText,
  iconLeft,
  iconRight,
  error = false,
  disabled = false,
  className,
  id,
  placeholder,
  ref,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  // Clicking the padding or an icon focuses the input, like clicking the text itself.
  const focusInput = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== inputRef.current) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  };

  const classes = ['pv-input', className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-error={error || undefined} data-disabled={disabled || undefined}>
      {(label || rightText) && (
        <div className="pv-input__label-row">
          {label ? (
            <label className="pv-input__label" htmlFor={inputId}>
              {label}
              {required && (
                <span className="pv-input__required" aria-hidden="true">
                  *
                </span>
              )}
            </label>
          ) : (
            <span />
          )}
          {rightText && <span className="pv-input__right-text">{rightText}</span>}
        </div>
      )}
      <div className="pv-input__field" onMouseDown={disabled ? undefined : focusInput}>
        {iconLeft && (
          <span className="pv-input__icon" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        <input
          {...rest}
          ref={inputRef}
          id={inputId}
          className="pv-input__control"
          disabled={disabled}
          required={required}
          aria-invalid={error || undefined}
          // A placeholder must exist for `:placeholder-shown` to detect an empty field.
          placeholder={placeholder ?? ' '}
        />
        {iconRight && (
          <span className="pv-input__icon" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>
    </div>
  );
}
