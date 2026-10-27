import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { fn } from 'storybook/test';
import { ProgressSegments, QuizTopBar } from './QuizTopBar';

const meta = {
  title: 'PlayVerse/Components/Quiz Top Bar',
  component: QuizTopBar,
  tags: ['autodocs'],
  args: { question: 2, total: 5, timeLeft: '0:11', onClose: fn() },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
} satisfies Meta<typeof QuizTopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Counting: Story = {};

export const LockedIn: Story = { args: { locked: true } };

export const Expired: Story = { args: { timeLeft: '0:00' } };

export const SegmentsOnly: Story = {
  render: () => <ProgressSegments completed={1} total={5} />,
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Counting', node: <QuizTopBar {...args} /> },
      { label: 'Locked in', node: <QuizTopBar {...args} locked /> },
      { label: 'Expired', node: <QuizTopBar {...args} timeLeft="0:00" /> },
      { label: 'Segments only', node: <ProgressSegments completed={1} total={5} /> },
    ]} />
  ),
};
