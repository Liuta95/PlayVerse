import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Wallet } from './Wallet';

const meta = {
  title: 'PlayVerse/Screens/Wallet',
  component: Wallet,
  args: {
    balance: '1,230',
    seasonResetsIn: '12 days',
    transactions: {
      Earned: [
        { title: 'Trivia Blitz reward', time: 'Today, 8:42 PM', amount: 80 },
        { title: 'Daily login bonus', time: 'Today, 9:14 AM', amount: 15 },
        { title: '3-day streak bonus', time: 'Yesterday, 7:03 PM', amount: 25 },
      ],
      Spent: [
        { title: 'Friday Night Trivia Blitz entry', time: 'Today, 7:58 PM', amount: -50 },
        { title: 'Pop Culture Speed Round entry', time: 'Yesterday, 6:30 PM', amount: -30 },
      ],
    },
    onEarnMore: fn(),
  },
} satisfies Meta<typeof Wallet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
