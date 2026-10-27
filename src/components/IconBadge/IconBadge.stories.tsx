import type { Meta, StoryObj } from '@storybook/react-vite';
import alertGold from '../../assets/icons/alert-gold.svg';
import calendar from '../../assets/icons/calendar.svg';
import checkLarge from '../../assets/icons/check-large.svg';
import clockGold from '../../assets/icons/clock-gold.svg';
import users from '../../assets/icons/users.svg';
import wifiOff from '../../assets/icons/wifi-off.svg';
import { StateGrid } from '../../../.storybook/StateGrid';
import { IconBadge } from './IconBadge';

const meta = {
  title: 'PlayVerse/Components/Icon Badge',
  component: IconBadge,
  tags: ['autodocs'],
  args: { icon: checkLarge, iconSize: 34, size: 80, tone: 'accent', outlined: true },
} satisfies Meta<typeof IconBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid row states={[
      { label: 'Accent · outlined', node: <IconBadge icon={checkLarge} iconSize={34} size={80} tone="accent" outlined /> },
      { label: 'Gold', node: <IconBadge icon={alertGold} iconSize={28} size={64} tone="gold" /> },
      { label: 'Danger', node: <IconBadge icon={wifiOff} iconSize={26} size={56} tone="danger" /> },
      { label: 'Neutral · outlined', node: <IconBadge icon={users} iconSize={28} size={64} outlined /> },
      { label: 'Neutral · outlined lg', node: <IconBadge icon={calendar} iconSize={32} size={76} outlined /> },
      { label: 'Neutral', node: <IconBadge icon={clockGold} iconSize={24} size={52} /> },
    ]} />
  ),
};
