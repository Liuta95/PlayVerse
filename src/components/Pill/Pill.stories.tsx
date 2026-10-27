import type { Meta, StoryObj } from '@storybook/react-vite';
import checkTiny from '../../assets/icons/check-tiny.svg';
import flame from '../../assets/icons/flame.svg';
import { Pill } from './Pill';

const meta = {
  title: 'PlayVerse/Components/Pill',
  component: Pill,
  tags: ['autodocs'],
  args: { label: 'Locked in', tone: 'success', outlined: true, icon: checkTiny },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LockedIn: Story = {};

export const Streak: Story = { args: { label: '3-day streak', tone: 'streak', size: 'sm', outlined: false, icon: flame } };

export const Feedback: Story = { args: { label: 'Correct! +20 pts', size: 'lg', outlined: false, icon: undefined } };

export const Neutral: Story = { args: { label: 'Practice', tone: 'neutral', icon: undefined } };
