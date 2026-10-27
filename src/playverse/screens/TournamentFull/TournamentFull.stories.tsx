import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TournamentFull } from './TournamentFull';

const meta = {
  title: 'PlayVerse/Screens/States/Tournament Full',
  component: TournamentFull,
  args: {
    tournament: 'Friday Night Trivia Blitz',
    suggestions: [
      { title: 'Pop Culture Speed Round', startsIn: '00:45:00', entryFee: 30 },
      { title: 'Weekend Sports Rally', startsIn: '01:20:00', entryFee: 40 },
    ],
    onBack: fn(),
  },
} satisfies Meta<typeof TournamentFull>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
