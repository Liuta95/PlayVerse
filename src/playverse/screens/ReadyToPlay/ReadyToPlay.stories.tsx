import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ReadyToPlay } from './ReadyToPlay';

const meta = {
  title: 'PlayVerse/Screens/Ready to Play',
  component: ReadyToPlay,
  args: {
    tournament: 'Friday Night Trivia Blitz',
    startsIn: '12:00',
    onStart: fn(),
    onBrowse: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof ReadyToPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
