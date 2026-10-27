import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'PlayVerse/Components/Search Bar',
  component: SearchBar,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = { args: { defaultValue: 'Trivia' } };
