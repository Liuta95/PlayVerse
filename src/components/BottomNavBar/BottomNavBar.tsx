import type { ComponentPropsWithRef, ReactNode } from 'react';
import './BottomNavBar.css';

export interface NavItemProps extends Omit<ComponentPropsWithRef<'a'>, 'children'> {
  /** 20px icon slot. Decorative. */
  icon: ReactNode;
  /** Figma "Text". */
  children: ReactNode;
  /** Figma "Selected". Sets `aria-current="page"`. */
  selected?: boolean;
}

/** One item of the bottom navigation, Figma "Nav.item" (213:3245). Renders a link. */
export function NavItem({ icon, selected = false, className, children, ...rest }: NavItemProps) {
  const classes = ['pv-nav-item', selected && 'pv-nav-item--selected', className].filter(Boolean).join(' ');
  return (
    <a {...rest} className={classes} aria-current={selected ? 'page' : undefined}>
      <span className="pv-nav-item__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="pv-nav-item__text">{children}</span>
    </a>
  );
}

export interface BottomNavBarProps extends ComponentPropsWithRef<'nav'> {
  /** `NavItem`s, 3 to 5 in Figma. */
  children: ReactNode;
}

/** Bottom navigation bar, Figma "Bottom Nav Bar" (1:898). Items share the width equally. */
export function BottomNavBar({ className, children, 'aria-label': ariaLabel = 'Main', ...rest }: BottomNavBarProps) {
  const classes = ['pv-bottom-nav', className].filter(Boolean).join(' ');
  return (
    <nav {...rest} aria-label={ariaLabel} className={classes}>
      {children}
    </nav>
  );
}
