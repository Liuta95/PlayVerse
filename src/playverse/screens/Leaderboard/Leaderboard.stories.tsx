import type { Meta, StoryObj } from '@storybook/react-vite';
import { Leaderboard } from './Leaderboard';

const meta = {
  title: 'PlayVerse/Screens/Leaderboard',
  component: Leaderboard,
  args: {
    balance: '1,230',
    tier: 'Gold Tier',
    tierPoints: 1240,
    tierMax: 2000,
    standings: {
      Global: [
        { rank: 95, name: 'Jordan K.', initials: 'JK', points: '4,120', color: 'var(--accent-soft)' },
        { rank: 96, name: 'Priya S.', initials: 'PS', points: '4,115', color: 'var(--success)' },
        { rank: 97, name: 'You', initials: 'YOU', points: '4,110', isYou: true },
        { rank: 98, name: 'Marcus T.', initials: 'MT', points: '4,105', color: 'var(--gold)' },
        { rank: 99, name: 'Ana R.', initials: 'AR', points: '4,098' },
      ],
      Friends: [
        { rank: 1, name: 'Priya S.', initials: 'PS', points: '4,115', color: 'var(--success)' },
        { rank: 2, name: 'You', initials: 'YOU', points: '4,110', isYou: true },
        { rank: 3, name: 'Ana R.', initials: 'AR', points: '4,098' },
      ],
    },
  },
} satisfies Meta<typeof Leaderboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
