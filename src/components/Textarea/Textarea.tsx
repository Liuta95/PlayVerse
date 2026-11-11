import { useId, useImperativeHandle, useRef } from 'react';
import type { ComponentPropsWithRef, MouseEvent, ReactNode } from 'react';
import '../Input/Input.css';
import './Textarea.css';

export interface TextareaProps extends ComponentPropsWithRef<'textarea'> {
  /** Label above the field. Figma "Label" row: leave empty to hide. */
  label?: ReactNode;
  /** Shows the red asterisk next to the label and sets the native `required`. */
  required?: boolean;
  /** Figma "Error" state. Sets `aria-invalid`. Link a message with `aria-describedby`. */
  error?: boolean;
}

export function Textarea({
  label,
  required,
  error = false,
  disabled = false,
  rows = 2,
  className,
  id,
  placeholder,
  ref,
  ...rest
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

  // Clicking the padding focuses the textarea, like clicking the text itself.
  const focusTextarea = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== textareaRef.current) {
      event.preventDefault();
      textareaRef.current?.focus();
    }
  };

  const classes = ['pv-input', 'pv-input--multiline', className].filter(Boolean).join(' ');

  return (
    <div className={classes} data-error={error || undefined} data-disabled={disabled || undefined}>
      {label && (
        <div className="pv-input__label-row">
          <label className="pv-input__label" htmlFor={textareaId}>
            {label}
            {required && (
              <span className="pv-input__required" aria-hidden="true">
                *
              </span>
            )}
          </label>
        </div>
      )}
      <div className="pv-input__field" onMouseDown={disabled ? undefined : focusTextarea}>
        <textarea
          {...rest}
          ref={textareaRef}
          id={textareaId}
          rows={rows}
          className="pv-input__control"
          disabled={disabled}
          required={required}
          aria-invalid={error || undefined}
          // A placeholder must exist for `:placeholder-shown` to detect an empty field.
          placeholder={placeholder ?? ' '}
        />
      </div>
    </div>
  );
}
