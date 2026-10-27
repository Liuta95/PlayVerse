import type { Meta, StoryObj } from '@storybook/react-vite';
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
