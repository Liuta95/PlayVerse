import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { CoinChip } from './CoinChip';

const meta = {
  title: 'PlayVerse/Components/Coin Chip',
  component: CoinChip,
  tags: ['autodocs'],
  args: { balance: '1,200' },
} satisfies Meta<typeof CoinChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LowBalance: Story = { args: { balance: '20' } };

export const LargeBalance: Story = { args: { balance: '128,450' } };

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid row states={[
      { label: 'Default', node: <CoinChip balance="1,200" /> },
      { label: 'Low', node: <CoinChip balance="20" /> },
      { label: 'Large', node: <CoinChip balance="128,450" /> },
    ]} />
  ),
};
