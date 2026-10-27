import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
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

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Default', node: <PrimaryButton {...args} /> },
      { label: 'Disabled', node: <PrimaryButton {...args} disabled /> },
      { label: 'Full width', node: <div style={{ width: 358 }}><PrimaryButton {...args} fullWidth /></div> },
    ]} />
  ),
};
