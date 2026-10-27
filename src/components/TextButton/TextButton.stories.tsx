import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
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

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid row states={[
      { label: 'md · secondary', node: <TextButton {...args} /> },
      { label: 'sm · secondary', node: <TextButton {...args} label="View Wallet" size="sm" /> },
      { label: 'md · muted', node: <TextButton {...args} tone="muted" /> },
      { label: 'sm · muted', node: <TextButton {...args} label="Exit tournament" size="sm" tone="muted" /> },
    ]} />
  ),
};
