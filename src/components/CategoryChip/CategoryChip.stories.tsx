import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { fn } from 'storybook/test';
import { CategoryChip } from './CategoryChip';

const meta = {
  title: 'PlayVerse/Components/Category Chip',
  component: CategoryChip,
  tags: ['autodocs'],
  args: { label: 'Trivia', onClick: fn() },
} satisfies Meta<typeof CategoryChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Group: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, width: 358 }}>
      {['Trivia', 'Pop Culture', 'Sports', 'Speed Rounds'].map((label) => (
        <CategoryChip key={label} {...args} label={label} />
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid row states={[
      { label: 'Default', node: <CategoryChip {...args} /> },
      { label: 'Long label', node: <CategoryChip {...args} label="Speed Rounds" /> },
    ]} />
  ),
};
