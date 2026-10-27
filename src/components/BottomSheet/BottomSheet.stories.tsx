import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { TextButton } from '../TextButton/TextButton';
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
