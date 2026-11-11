import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon-with-bg' | 'icon-without-bg';
export type ButtonSize = 'large' | 'medium';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma "Type": Primary, Secondary, Tertiary, IconOnly-w-bg (`icon-with-bg`), IconOnly (`icon-without-bg`). */
  variant?: ButtonVariant;
  /** Figma "Size": Large = 48px, Medium = 44px. */
  size?: ButtonSize;
  /** Figma "Loading" state. Sets `aria-busy` and ignores clicks, but stays focusable. */
  loading?: boolean;
  /** Figma "Error" state. */
  error?: boolean;
  /** Figma "Selected" state. Sets `aria-pressed`, so the button behaves as a toggle. */
  selected?: boolean;
  /** Icon before the label. Icon-only variants render this one. Decorative: hidden from assistive tech. */
  iconLeft?: ReactNode;
  /** Icon after the label. */
  iconRight?: ReactNode;
  /** Label. Not rendered by icon-only variants: give those an `aria-label`. */
  children?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'large',
  loading = false,
  error = false,
  selected,
  iconLeft,
  iconRight,
  children,
  className,
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const iconOnly = variant === 'icon-with-bg' || variant === 'icon-without-bg';
  const classes = ['pv-button', `pv-button--${variant}`, `pv-button--${size}`, className].filter(Boolean).join(' ');

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  return (
    <button
      {...rest}
      type={type}
      className={classes}
      onClick={handleClick}
      aria-busy={loading || undefined}
      aria-pressed={selected === undefined ? undefined : selected}
      data-selected={selected || undefined}
      data-error={error || undefined}
    >
      {iconOnly ? (
        <span className="pv-button__icon" aria-hidden="true">
          {iconLeft ?? iconRight}
        </span>
      ) : (
        <>
          {iconLeft && (
            <span className="pv-button__icon" aria-hidden="true">
              {iconLeft}
            </span>
          )}
          {children !== undefined && <span className="pv-button__label">{children}</span>}
          {iconRight && (
            <span className="pv-button__icon" aria-hidden="true">
              {iconRight}
            </span>
          )}
        </>
      )}
    </button>
  );
}
