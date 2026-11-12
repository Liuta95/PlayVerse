import type { ComponentPropsWithRef, ReactNode } from 'react';
import './AdminNavBar.css';

export interface AdminNavItemProps extends Omit<ComponentPropsWithRef<'a'>, 'children'> {
  /** 20px icon slot. Decorative. */
  icon: ReactNode;
  /** Figma item label ("Overview", "Tournaments", ...). */
  children: ReactNode;
  /** Figma "Active". Sets `aria-current="page"`. */
  selected?: boolean;
}

/** One item of the admin bar. Renders a link. */
export function AdminNavItem({ icon, selected = false, className, children, ...rest }: AdminNavItemProps) {
  const classes = ['pv-admin-nav__item', selected && 'pv-admin-nav__item--selected', className].filter(Boolean).join(' ');
  return (
    <a {...rest} className={classes} aria-current={selected ? 'page' : undefined}>
      <span className="pv-admin-nav__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="pv-admin-nav__text">{children}</span>
    </a>
  );
}

export interface AdminNavBarProps extends ComponentPropsWithRef<'nav'> {
  /** `AdminNavItem`s, 4 in Figma. */
  children: ReactNode;
}

/** Mobile admin navigation bar, Figma "Admin Nav Bar" (125:917). Items share the width equally. */
export function AdminNavBar({ className, children, 'aria-label': ariaLabel = 'Admin', ...rest }: AdminNavBarProps) {
  const classes = ['pv-admin-nav', className].filter(Boolean).join(' ');
  return (
    <nav {...rest} aria-label={ariaLabel} className={classes}>
      {children}
    </nav>
  );
}
