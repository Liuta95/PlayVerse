import type { ReactNode } from 'react';
import './BottomSheet.css';

export interface BottomSheetProps {
  children: ReactNode;
  /** Called when the dimmed backdrop is tapped */
  onDismiss?: () => void;
  'aria-label'?: string;
}

/** Dims its positioned parent and docks a sheet to the bottom edge. */
export const BottomSheet = ({ children, onDismiss, 'aria-label': ariaLabel }: BottomSheetProps) => (
  <>
    <div className="pv-bottom-sheet__backdrop" onClick={onDismiss} aria-hidden />
    <section className="pv-bottom-sheet" role="dialog" aria-modal="true" aria-label={ariaLabel}>
      <span className="pv-bottom-sheet__handle" aria-hidden />
      {children}
    </section>
  </>
);
