import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { BottomNavBar, type NavTab } from './BottomNavBar';

const meta = {
  title: 'PlayVerse/Components/Bottom Nav Bar',
  component: BottomNavBar,
  tags: ['autodocs'],
  args: { active: 'Lobby', onChange: fn() },
  argTypes: { active: { control: 'inline-radio', options: ['Lobby', 'Leaderboard', 'Wallet'] } },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
} satisfies Meta<typeof BottomNavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Lobby: Story = {};

export const Leaderboard: Story = { args: { active: 'Leaderboard' } };

export const Wallet: Story = { args: { active: 'Wallet' } };

export const Interactive: Story = {
  render: function Render(args) {
    const [active, setActive] = useState<NavTab>(args.active);
    return <BottomNavBar active={active} onChange={(tab) => { setActive(tab); args.onChange?.(tab); }} />;
  },
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={(['Lobby', 'Leaderboard', 'Wallet'] as const).map((tab) => ({
      label: `Active = ${tab}`,
      node: <BottomNavBar {...args} active={tab} />,
    }))} />
  ),
};
