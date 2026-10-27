import type { Meta, StoryObj } from '@storybook/react-vite';
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
