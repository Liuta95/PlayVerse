import type { Meta, StoryObj } from '@storybook/react-vite';
import { TierProgress } from './TierProgress';

const meta = {
  title: 'PlayVerse/Components/Tier Progress',
  component: TierProgress,
  tags: ['autodocs'],
  args: { tier: 'Gold Tier', value: 1240, max: 2000 },
  argTypes: { value: { control: { type: 'range', min: 0, max: 2000, step: 10 } } },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof TierProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AlmostThere: Story = { args: { value: 1920 } };
