import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { PrimaryButton } from '../PrimaryButton';
import { TextButton } from '../TextButton';
import { StickyFooter } from './StickyFooter';

const meta = {
  title: 'PlayVerse/Components/Sticky Footer',
  component: StickyFooter,
  tags: ['autodocs'],
  args: {
    gap: 10,
    children: (
      <>
        <PrimaryButton label="Back to Lobby" />
        <TextButton label="View Wallet" size="sm" />
      </>
    ),
  },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
} satisfies Meta<typeof StickyFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: (args) => (
    <StateGrid states={[
      { label: 'Button + link', node: <StickyFooter {...args} /> },
      { label: 'Button only', node: <StickyFooter><PrimaryButton label="Claim Reward" /></StickyFooter> },
    ]} />
  ),
};
