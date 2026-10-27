import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppHeader } from './AppHeader';

const meta = {
  title: 'PlayVerse/Components/App Header',
  component: AppHeader,
  tags: ['autodocs'],
  args: { title: 'PlayVerse', balance: '1,200' },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Leaderboard: Story = { args: { title: 'Leaderboard' } };

export const WithoutBalance: Story = { args: { title: 'Wallet', balance: undefined } };
