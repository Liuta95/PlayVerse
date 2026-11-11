import type { HTMLAttributes, ReactNode } from 'react';
import logoUrl from '../../assets/playverse-logo.svg';
import './Sidebar.css';

export interface SidebarUser {
  name: string;
  /** Second line under the name, e.g. "Super admin". */
  role?: string;
  /** Avatar letters. Defaults to the first letters of the name. */
  initials?: string;
}

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Figma "State": `false` = Expanded (240px), `true` = Collapsed (80px, icons only). */
  collapsed?: boolean;
  /** Called with the next value when the toggle is pressed. The toggle is only shown when this is set. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Account card at the bottom (avatar only when collapsed). */
  user?: SidebarUser;
  /** Accessible name of the navigation landmark. */
  navLabel?: string;
  /** `MenuItem`s. Put `secondary` items right after the main item they belong to. */
  children: ReactNode;
}

const PanelToggleIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2.5" width="12" height="11" rx="2" />
    <path d="M10 2.5v11" />
    <path d={collapsed ? 'M7 6 5.2 8 7 10' : 'M5.2 6 7 8 5.2 10'} />
  </svg>
);

const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');

/** App navigation rail with the PlayVerse logo, a menu and the signed-in account. */
export function Sidebar({
  collapsed = false,
  onCollapsedChange,
  user,
  navLabel = 'Main',
  className,
  children,
  ...rest
}: SidebarProps) {
  const classes = ['pv-sidebar', collapsed && 'pv-sidebar--collapsed', className].filter(Boolean).join(' ');

  return (
    <aside {...rest} className={classes}>
      <div className="pv-sidebar__top">
        <div className="pv-sidebar__brand">
          <div className="pv-sidebar__logo">
            <img className="pv-sidebar__logo-icon" src={logoUrl} alt={collapsed ? 'PlayVerse' : ''} />
            <span className="pv-sidebar__wordmark">
              Play<span>Verse</span>
            </span>
          </div>
          {!collapsed && onCollapsedChange && (
            <button type="button" className="pv-sidebar__toggle" aria-label="Collapse sidebar" aria-expanded onClick={() => onCollapsedChange(true)}>
              <PanelToggleIcon collapsed={false} />
            </button>
          )}
        </div>
        {collapsed && onCollapsedChange && (
          <button type="button" className="pv-sidebar__toggle" aria-label="Expand sidebar" aria-expanded={false} onClick={() => onCollapsedChange(false)}>
            <PanelToggleIcon collapsed />
          </button>
        )}
        <nav className="pv-sidebar__nav" aria-label={navLabel}>
          {children}
        </nav>
      </div>
      {user &&
        (collapsed ? (
          <span className="pv-sidebar__avatar" role="img" aria-label={user.name}>
            {user.initials ?? initialsOf(user.name)}
          </span>
        ) : (
          <div className="pv-sidebar__user">
            <span className="pv-sidebar__avatar" aria-hidden="true">
              {user.initials ?? initialsOf(user.name)}
            </span>
            <div className="pv-sidebar__user-text">
              <span className="pv-sidebar__user-name">{user.name}</span>
              {user.role && <span className="pv-sidebar__user-role">{user.role}</span>}
            </div>
          </div>
        ))}
    </aside>
  );
}
