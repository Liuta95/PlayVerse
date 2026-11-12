import type { ComponentPropsWithRef, ReactNode } from 'react';
import './Tab.css';

export interface TabProps extends ComponentPropsWithRef<'button'> {
  /** Figma "Selected". Sets `aria-selected`. */
  selected?: boolean;
  /** Tab text. */
  children: ReactNode;
}

/** Tab from Figma "Tabs" (266:1663). Put tabs inside an element with `role="tablist"`. */
export function Tab({ selected = false, className, type = 'button', children, ...rest }: TabProps) {
  const classes = ['pv-tab', selected && 'pv-tab--selected', className].filter(Boolean).join(' ');
  return (
    <button {...rest} type={type} role="tab" aria-selected={selected} className={classes}>
      {children}
    </button>
  );
}
