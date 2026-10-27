import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
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

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid row states={[
      { label: 'Success · outlined', node: <Pill label="Locked in" tone="success" outlined icon={checkTiny} /> },
      { label: 'Success · lg', node: <Pill label="Correct! +20 pts" tone="success" size="lg" /> },
      { label: 'Danger · lg', node: <Pill label="Not quite · +0 pts" tone="danger" size="lg" /> },
      { label: 'Streak · sm', node: <Pill label="3-day streak" tone="streak" size="sm" icon={flame} /> },
      { label: 'Neutral', node: <Pill label="Practice" /> },
      { label: 'Neutral · outlined', node: <Pill label="Practice" outlined /> },
    ]} />
  ),
};
