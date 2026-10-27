import type { Meta, StoryObj } from '@storybook/react-vite';
import { Lobby } from './Lobby';

const meta = {
  title: 'PlayVerse/Screens/Lobby',
  component: Lobby,
  args: {
    balance: '1,200',
    tournaments: [
      {
        title: 'Friday Night Trivia Blitz',
        format: '5 questions · 15s each',
        startsIn: '00:12:00',
        entryFee: 50,
        featured: true,
        joined: '1,204',
      },
      {
        title: 'Pop Culture Speed Round',
        format: '5 questions · 10s each',
        startsIn: '00:45:00',
        entryFee: 30,
      },
    ],
    categories: ['Trivia', 'Pop Culture', 'Sports', 'Speed Rounds'],
  },
} satisfies Meta<typeof Lobby>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** Figma: "State — No Tournaments" */
export const NoTournaments: Story = {
  args: {
    tournaments: [],
    nextTournament: { title: 'Weekend Sports Rally', startsIn: '2h 14m' },
  },
};
