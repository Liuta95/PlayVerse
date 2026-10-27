import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { TransactionList } from './TransactionList';

const meta = {
  title: 'PlayVerse/Components/Transaction List',
  component: TransactionList,
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Trivia Blitz reward', time: 'Today, 8:42 PM', amount: 80 },
      { title: 'Daily login bonus', time: 'Today, 9:14 AM', amount: 15 },
      { title: '3-day streak bonus', time: 'Yesterday, 7:03 PM', amount: 25 },
    ],
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof TransactionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Earned: Story = {};

export const Spent: Story = {
  args: {
    items: [
      { title: 'Friday Night Trivia Blitz entry', time: 'Today, 7:58 PM', amount: -50 },
      { title: 'Pop Culture Speed Round entry', time: 'Yesterday, 6:30 PM', amount: -30 },
    ],
  },
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Earned (credits)', node: <TransactionList {...args} /> },
      { label: 'Spent (debits)', node: <TransactionList {...args} {...Spent.args} /> },
    ]} />
  ),
};
