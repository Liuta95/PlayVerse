import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { KeyValueList } from './KeyValueList';

const meta = {
  title: 'PlayVerse/Components/Key Value List',
  component: KeyValueList,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Questions answered', value: '5 / 5' },
      { label: 'Time spent', value: '1m 12s' },
      { label: 'Accuracy', value: '80%' },
      { label: 'Net change', value: '+30 Coins', tone: 'success' },
    ],
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof KeyValueList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {};

export const StrongLabels: Story = {
  args: {
    strongLabels: true,
    items: [
      { label: 'Top 10%', value: '500 Coins + Badge', tone: 'gold' },
      { label: 'Participation', value: '20 Coins', tone: 'gold' },
    ],
  },
};

export const Boxed: Story = {
  args: {
    variant: 'boxed',
    dividers: true,
    items: [
      { label: 'Entry cost', value: '−50 Coins', tone: 'gold' },
      { label: 'Balance after', value: '1,200 → 1,150 Coins' },
    ],
  },
};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Table', node: <KeyValueList {...args} /> },
      { label: 'Table · strong labels', node: <KeyValueList {...args} {...StrongLabels.args} /> },
      { label: 'Boxed · dividers', node: <KeyValueList {...args} {...Boxed.args} /> },
      { label: 'Boxed', node: <KeyValueList {...args} {...Boxed.args} dividers={false} /> },
    ]} />
  ),
};
