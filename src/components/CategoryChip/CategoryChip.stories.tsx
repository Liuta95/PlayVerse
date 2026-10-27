import type { Meta, StoryObj } from '@storybook/react-vite';
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
