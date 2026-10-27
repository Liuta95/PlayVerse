import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { fn } from 'storybook/test';
import { TournamentCard } from './TournamentCard';

const meta = {
  title: 'PlayVerse/Components/Tournament Card',
  component: TournamentCard,
  tags: ['autodocs'],
  args: {
    title: 'Pop Culture Speed Round',
    format: '5 questions · 10s each',
    startsIn: '00:45:00',
    entryFee: 30,
    onView: fn(),
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof TournamentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Featured: Story = {
  args: {
    title: 'Friday Night Trivia Blitz',
    format: '5 questions · 15s each',
    startsIn: '00:12:00',
    entryFee: 50,
    featured: true,
    joined: '1,204',
  },
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Default', node: <TournamentCard {...args} /> },
      { label: 'Featured', node: <TournamentCard {...args} {...Featured.args} /> },
      { label: 'Compact · featured', node: <TournamentCard {...args} compact featured /> },
      { label: 'Compact', node: <TournamentCard {...args} title="Weekend Sports Rally" startsIn="01:20:00" entryFee={40} compact /> },
    ]} />
  ),
};
