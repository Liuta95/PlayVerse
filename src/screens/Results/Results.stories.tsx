import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Results } from './Results';

const meta = {
  title: 'PlayVerse/Screens/Results',
  component: Results,
  args: {
    balance: '1,230',
    correct: 4,
    total: 5,
    percentile: 'Top 18% of players',
    coins: 80,
    xp: 120,
    rankBefore: 142,
    rankAfter: 97,
    streakDays: 3,
    summary: 'You answered 4 of 5 correctly in 42 seconds — faster than 71% of players today.',
    onClaim: fn(),
    onLeaderboard: fn(),
    onBreak: fn(),
  },
} satisfies Meta<typeof Results>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const NoStreak: Story = { args: { streakDays: undefined } };
