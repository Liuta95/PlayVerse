import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { Tabs } from './Tabs';

const options = ['Earned', 'Spent'] as const;

const meta = {
  title: 'PlayVerse/Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: { options, value: 'Earned', onChange: fn() },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof Tabs<(typeof options)[number]>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <Tabs {...args} value={value} onChange={setValue} />;
  },
};
