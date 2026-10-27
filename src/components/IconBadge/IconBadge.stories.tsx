import type { Meta, StoryObj } from '@storybook/react-vite';
import alertGold from '../../../assets/icons/alert-gold.svg';
import calendar from '../../../assets/icons/calendar.svg';
import checkLarge from '../../../assets/icons/check-large.svg';
import clockGold from '../../../assets/icons/clock-gold.svg';
import users from '../../../assets/icons/users.svg';
import wifiOff from '../../../assets/icons/wifi-off.svg';
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

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <IconBadge icon={checkLarge} iconSize={34} size={80} tone="accent" outlined />
      <IconBadge icon={alertGold} iconSize={28} size={64} tone="gold" />
      <IconBadge icon={wifiOff} iconSize={26} size={56} tone="danger" />
      <IconBadge icon={users} iconSize={28} size={64} outlined />
      <IconBadge icon={calendar} iconSize={32} size={76} outlined />
      <IconBadge icon={clockGold} iconSize={24} size={52} />
    </div>
  ),
};
