import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { BalanceCard } from './BalanceCard';

const meta = {
  title: 'PlayVerse/Components/Balance Card',
  component: BalanceCard,
  tags: ['autodocs'],
  args: { balance: '1,230', note: 'Virtual currency · no cash value · season resets in 12 days' },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof BalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutNote: Story = { args: { note: undefined } };

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'With note', node: <BalanceCard {...args} /> },
      { label: 'Without note', node: <BalanceCard balance={args.balance} /> },
    ]} />
  ),
};
