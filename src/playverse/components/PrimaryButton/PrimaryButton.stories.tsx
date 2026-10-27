import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PrimaryButton } from './PrimaryButton';

const meta = {
  title: 'PlayVerse/Components/Primary Button',
  component: PrimaryButton,
  tags: ['autodocs'],
  args: { label: 'Register — 50 Coins', onClick: fn() },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };

export const Labels: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16 }}>
      {['Register — 50 Coins', 'Start Quiz', 'Back to Lobby', 'Get More Coins'].map((label) => (
        <PrimaryButton key={label} {...args} label={label} />
      ))}
    </div>
  ),
};
