import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import './MenuItem.css';

export type MenuItemVariant = 'main' | 'secondary';

interface MenuItemOwnProps {
  /** Figma "Type": `main` has an icon, `secondary` is an indented sub-item without one. */
  variant?: MenuItemVariant;
  /** Figma "Active" state: the current page. Sets `aria-current="page"`. */
  active?: boolean;
  /** Icon before the label (20px slot, Figma "show left icon"). Decorative. Not rendered by `secondary`. */
  icon?: ReactNode;
  /** Shows the trailing chevron of an item that opens a sub-menu. */
  expandable?: boolean;
  /** For expandable items: whether the sub-menu is open. Sets `aria-expanded`. */
  expanded?: boolean;
  /** Renders a link (`<a>`) instead of a button. */
  href?: string;
  /** Link target, used with `href`. */
  target?: string;
  /** Link rel, used with `href`. */
  rel?: string;
  className?: string;
  children: ReactNode;
}

export interface MenuItemProps extends MenuItemOwnProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MenuItemOwnProps> {}

const ChevronDown = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" aria-hidden="true">
    <path d="m1 1 4.5 4L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Navigation entry for a sidebar. Renders a link when `href` is set, a button otherwise. Hover comes from the pointer. */
export function MenuItem(props: MenuItemProps) {
  const { variant = 'main', active = false, icon, expandable = false, expanded, href, target, rel, className, children, ...rest } = props;
  const classes = ['pv-menu-item', `pv-menu-item--${variant}`, className].filter(Boolean).join(' ');
  const common = {
    className: classes,
    'aria-current': active ? ('page' as const) : undefined,
    'aria-expanded': expandable ? expanded : undefined,
  };

  const content = (
    <>
      {variant === 'main' && icon && (
        <span className="pv-menu-item__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="pv-menu-item__label">{children}</span>
      {expandable && (
        <span className="pv-menu-item__chevron" aria-hidden="true">
          <ChevronDown />
        </span>
      )}
    </>
  );

  if (href !== undefined) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} {...common} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" {...rest} {...common}>
      {content}
    </button>
  );
}
