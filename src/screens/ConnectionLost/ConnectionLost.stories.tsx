import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ConnectionLost } from './ConnectionLost';

const meta = {
  title: 'PlayVerse/Screens/States/Connection Lost',
  component: ConnectionLost,
  args: {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Mars', 'Venus'],
    questionNumber: 2,
    totalQuestions: 5,
    entryFee: 50,
    onRetry: fn(),
    onExit: fn(),
  },
} satisfies Meta<typeof ConnectionLost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
