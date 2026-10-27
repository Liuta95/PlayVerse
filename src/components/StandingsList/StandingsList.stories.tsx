import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { StandingsList } from './StandingsList';

const meta = {
  title: 'PlayVerse/Components/Standings List',
  component: StandingsList,
  tags: ['autodocs'],
  args: {
    entries: [
      { rank: 95, name: 'Jordan K.', initials: 'JK', points: '4,120', color: 'var(--accent-soft)' },
      { rank: 96, name: 'Priya S.', initials: 'PS', points: '4,115', color: 'var(--success)' },
      { rank: 97, name: 'You', initials: 'YOU', points: '4,110', isYou: true },
      { rank: 98, name: 'Marcus T.', initials: 'MT', points: '4,105', color: 'var(--gold)' },
      { rank: 99, name: 'Ana R.', initials: 'AR', points: '4,098' },
    ],
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof StandingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AroundYou: Story = {};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Around you', node: <StandingsList {...args} /> },
      { label: 'Without you', node: <StandingsList entries={args.entries.filter((e) => !e.isYou)} /> },
    ]} />
  ),
};
