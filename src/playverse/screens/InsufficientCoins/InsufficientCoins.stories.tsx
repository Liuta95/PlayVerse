import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { InsufficientCoins } from './InsufficientCoins';

const meta = {
  title: 'PlayVerse/Screens/States/Insufficient Coins',
  component: InsufficientCoins,
  args: {
    tournament: 'Friday Night Trivia Blitz',
    balance: 20,
    entryFee: 50,
    onEarn: fn(),
    onBrowse: fn(),
  },
} satisfies Meta<typeof InsufficientCoins>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
