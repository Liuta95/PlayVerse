import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { fn } from 'storybook/test';
import { SectionHeader } from './SectionHeader';

const meta = {
  title: 'PlayVerse/Components/Section Header',
  component: SectionHeader,
  tags: ['autodocs'],
  args: { title: 'Live now', actionLabel: 'See all', onAction: fn() },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {};

export const TitleOnly: Story = { args: { title: 'Season standings', actionLabel: undefined } };

export const Muted: Story = { args: { title: 'Full rules', actionLabel: undefined, tone: 'muted' } };

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'With action', node: <SectionHeader {...args} /> },
      { label: 'Title only', node: <SectionHeader title="Season standings" /> },
      { label: 'Muted', node: <SectionHeader title="Full rules" tone="muted" /> },
    ]} />
  ),
};
