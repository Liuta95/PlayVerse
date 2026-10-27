import type { Meta, StoryObj } from '@storybook/react-vite';
import clockGold from '../../../assets/icons/clock-gold.svg';
import wifiOff from '../../../assets/icons/wifi-off.svg';
import { IconBadge } from '../IconBadge/IconBadge';
import { SecondaryButton } from '../SecondaryButton/SecondaryButton';
import { Dialog } from './Dialog';

const meta = {
  title: 'PlayVerse/Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    icon: <IconBadge icon={clockGold} iconSize={24} size={52} />,
    title: "Time's up!",
    description: 'No answer selected — moving to the next question.',
    size: 'sm',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Notice: Story = {};

export const Blocking: Story = {
  args: {
    icon: <IconBadge icon={wifiOff} iconSize={26} size={56} tone="danger" />,
    title: 'Connection lost',
    description: 'Reconnecting… your progress and entry are protected.',
    size: 'md',
    children: <div style={{ width: '100%', marginTop: 20 }}><SecondaryButton label="Retry Now" fullWidth compact /></div>,
  },
  decorators: [(Story) => <div style={{ width: 342 }}><Story /></div>],
};
