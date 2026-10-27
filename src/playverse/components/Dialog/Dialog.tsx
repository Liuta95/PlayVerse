import type { ReactNode } from 'react';
import './Dialog.css';

export interface DialogProps {
  /** Usually an <IconBadge /> */
  icon: ReactNode;
  title: string;
  description: string;
  /** sm: 280px toast-like notice · md: full-width blocking dialog */
  size?: 'sm' | 'md';
  children?: ReactNode;
}

/** Centered modal card. Place it over a scrim or dimmed screen. */
export const Dialog = ({ icon, title, description, size = 'md', children }: DialogProps) => (
  <section className={`pv-dialog pv-dialog--${size}`} role="alertdialog" aria-label={title}>
    {icon}
    <h2 className="pv-dialog__title">{title}</h2>
    <p className="pv-dialog__description">{description}</p>
    {children}
  </section>
);
