// Placeholder icons for stories only (the project has no icon set yet; Figma uses its own icon library).
// 16px glyphs that follow `currentColor`, meant for a 20px icon slot.
import type { ReactNode } from 'react';

const Svg = ({ children }: { children: ReactNode }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export const DashboardIcon = () => (
  <Svg>
    <rect x="2" y="2" width="5" height="6" rx="1" />
    <rect x="9" y="2" width="5" height="3" rx="1" />
    <rect x="2" y="10" width="5" height="4" rx="1" />
    <rect x="9" y="7" width="5" height="7" rx="1" />
  </Svg>
);

export const TrophyIcon = () => (
  <Svg>
    <path d="M5 2h6v4a3 3 0 0 1-6 0V2Z" />
    <path d="M5 3H2.5v1.5A2.5 2.5 0 0 0 5 7M11 3h2.5v1.5A2.5 2.5 0 0 1 11 7" />
    <path d="M8 9v3M5.5 14h5" />
  </Svg>
);

export const HelpIcon = () => (
  <Svg>
    <circle cx="8" cy="8" r="6" />
    <path d="M6.3 6.3a1.8 1.8 0 1 1 2.6 1.6c-.6.3-.9.7-.9 1.3" />
    <path d="M8 11.4h.01" />
  </Svg>
);

export const GroupIcon = () => (
  <Svg>
    <circle cx="6" cy="5.5" r="2.2" />
    <path d="M2 13c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" />
    <circle cx="11.5" cy="6" r="1.7" />
    <path d="M11.5 9.6c1.5 0 2.5.9 2.5 2.4" />
  </Svg>
);

export const SavingsIcon = () => (
  <Svg>
    <ellipse cx="8" cy="4.5" rx="5" ry="2" />
    <path d="M3 4.5v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3M3 7.5v3c0 1.1 2.2 2 5 2s5-.9 5-2v-3" />
  </Svg>
);

export const ShieldIcon = () => (
  <Svg>
    <path d="M8 1.5 13 3.5v4c0 3-2.2 5.2-5 6-2.8-.8-5-3-5-6v-4l5-2Z" />
    <path d="m5.8 8 1.6 1.6 3-3" />
  </Svg>
);

export const SettingsIcon = () => (
  <Svg>
    <circle cx="8" cy="8" r="2.2" />
    <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M12.6 3.4l-1.4 1.4M4.8 11.2l-1.4 1.4" />
  </Svg>
);
