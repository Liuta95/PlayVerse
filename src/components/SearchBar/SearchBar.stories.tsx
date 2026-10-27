import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
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

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid states={[
      { label: 'Empty', node: <SearchBar /> },
      { label: 'With value', node: <SearchBar defaultValue="Trivia" /> },
    ]} />
  ),
};
