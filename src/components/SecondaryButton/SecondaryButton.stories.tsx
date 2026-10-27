import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SecondaryButton } from './SecondaryButton';

const meta = {
  title: 'PlayVerse/Components/Secondary Button',
  component: SecondaryButton,
  tags: ['autodocs'],
  args: { label: 'Earn More Coins', fullWidth: true, onClick: fn() },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {};

export const Compact: Story = { args: { label: 'Retry Now', compact: true } };

export const Hug: Story = { args: { label: 'Remind Me', fullWidth: false, compact: true } };

export const Disabled: Story = { args: { disabled: true } };
