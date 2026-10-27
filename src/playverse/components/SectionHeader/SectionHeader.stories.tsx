import type { Meta, StoryObj } from '@storybook/react-vite';
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
