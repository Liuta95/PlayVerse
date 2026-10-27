import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TournamentDetails } from './TournamentDetails';

const meta = {
  title: 'PlayVerse/Screens/Tournament Details',
  component: TournamentDetails,
  args: {
    balance: '1,200',
    title: 'Friday Night Trivia Blitz',
    startsIn: '00:12:00',
    joined: '1,204',
    startTime: '8:00 PM',
    duration: '~2 min',
    questions: 5,
    entryFee: 50,
    maxReward: 500,
    maxRewardNote: 'Top 10% finish',
    rewards: [
      { label: 'Top 10%', value: '500 Coins + Badge', tone: 'gold' },
      { label: 'Participation', value: '20 Coins', tone: 'gold' },
    ],
    rules: [
      'Score is based on correct answers and response time',
      'Ties are broken by total response time',
      'Once started, the quiz runs as one continuous round and cannot be restarted.',
    ],
    onBack: fn(),
    onRegister: fn(),
  },
} satisfies Meta<typeof TournamentDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
