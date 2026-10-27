import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SessionSummary } from './SessionSummary';

const meta = {
  title: 'PlayVerse/Screens/Session Summary',
  component: SessionSummary,
  args: {
    stats: [
      { label: 'Questions answered', value: '5 / 5' },
      { label: 'Time spent', value: '1m 12s' },
      { label: 'Accuracy', value: '80%' },
      { label: 'Coins spent', value: '50' },
      { label: 'Coins earned', value: '80' },
      { label: 'Net change', value: '+30 Coins', tone: 'success' },
    ],
    endedAt: 'Today, 8:14 PM',
    onLobby: fn(),
    onWallet: fn(),
  },
} satisfies Meta<typeof SessionSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
