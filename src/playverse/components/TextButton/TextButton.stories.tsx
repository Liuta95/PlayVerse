import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TextButton } from './TextButton';

const meta = {
  title: 'PlayVerse/Components/Text Button',
  component: TextButton,
  tags: ['autodocs'],
  args: { label: 'Cancel', onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { label: 'View Wallet', size: 'sm' } };

export const Muted: Story = { args: { label: 'Exit tournament', size: 'sm', tone: 'muted' } };
