import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { StatTile } from './StatTile';

const meta = {
  title: 'PlayVerse/Components/Stat Tile',
  component: StatTile,
  tags: ['autodocs'],
  args: { value: '+80', label: 'Coins', tone: 'gold' },
  decorators: [(Story) => <div style={{ display: 'flex', width: 174 }}><Story /></div>],
} satisfies Meta<typeof StatTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Coins: Story = {};

export const XP: Story = { args: { value: '+120', label: 'XP', tone: 'xp' } };

export const Pair: Story = {
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
  render: () => (
    <div style={{ display: 'flex', gap: 10 }}>
      <StatTile value="+80" label="Coins" tone="gold" />
      <StatTile value="+120" label="XP" tone="xp" />
    </div>
  ),
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
  render: () => (
    <StateGrid states={[
      { label: 'Tone = gold', node: <div style={{ display: 'flex' }}><StatTile value="+80" label="Coins" tone="gold" /></div> },
      { label: 'Tone = xp', node: <div style={{ display: 'flex' }}><StatTile value="+120" label="XP" tone="xp" /></div> },
    ]} />
  ),
};
