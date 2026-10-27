import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { fn } from 'storybook/test';
import { PrimaryButton } from '../PrimaryButton';
import { TextButton } from '../TextButton';
import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'PlayVerse/Components/Bottom Sheet',
  component: BottomSheet,
  tags: ['autodocs'],
  args: {
    onDismiss: fn(),
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <p style={{ margin: '0 0 12px', color: 'var(--text-secondary)', fontSize: 14 }}>Sheet content goes here.</p>
        <PrimaryButton label="Confirm" />
        <TextButton label="Cancel" />
      </div>
    ),
  },
  decorators: [(Story) => <div className="pv-screen" style={{ height: 420 }}><Story /></div>],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** The sheet has a single visual state; it is dismissed by unmounting. */
export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
  render: () => (
    <StateGrid states={[{
      label: 'Open',
      node: (
        <div className="pv-screen" style={{ height: 420 }}>
          <BottomSheet>
            <PrimaryButton label="Confirm" />
          </BottomSheet>
        </div>
      ),
    }]} />
  ),
};
