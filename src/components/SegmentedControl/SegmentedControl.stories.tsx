import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { SegmentedControl } from './SegmentedControl';

const options = ['Global', 'Friends'] as const;

const meta = {
  title: 'PlayVerse/Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  args: { options, value: 'Global', onChange: fn() },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof SegmentedControl<(typeof options)[number]>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <SegmentedControl {...args} value={value} onChange={setValue} />;
  },
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={options.map((value) => ({
      label: `Selected = ${value}`,
      node: <SegmentedControl {...args} value={value} />,
    }))} />
  ),
};
