import type { Meta, StoryObj } from '@storybook/react-vite';
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
