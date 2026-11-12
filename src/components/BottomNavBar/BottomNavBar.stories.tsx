import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccountCircleIcon, ClockIcon, CreditCardIcon, HomeIcon, TrophyIcon } from './nav-icons';
import { BottomNavBar, NavItem } from './BottomNavBar';

const ITEMS = [
  { label: 'Lobby', icon: <HomeIcon /> },
  { label: 'Leaderboard', icon: <TrophyIcon /> },
  { label: 'Wallet', icon: <CreditCardIcon /> },
  { label: 'Profile', icon: <AccountCircleIcon /> },
  { label: 'Text', icon: <ClockIcon /> },
];

type BarArgs = { items: 3 | 4 | 5; selected: number };

const renderBar = ({ items, selected }: BarArgs) => (
  <BottomNavBar>
    {ITEMS.slice(0, items).map((item, index) => (
      <NavItem key={item.label} href="#" icon={item.icon} selected={index === selected}>
        {item.label}
      </NavItem>
    ))}
  </BottomNavBar>
);

/** Figma "Bottom Nav Bar" (1:898): Nav.items = 5, 4, 3. The bar fills the width of its container. */
const meta = {
  title: 'Components/Bottom Nav Bar/Bottom Nav Bar',
  parameters: { layout: 'padded' },
  render: renderBar,
  args: { items: 5, selected: 0 },
  argTypes: {
    items: { table: { disable: true } },
    selected: { control: 'inline-radio', options: [0, 1, 2, 3, 4], description: 'Index of the selected item.' },
  },
} satisfies Meta<BarArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavItems5: Story = { name: 'Nav.items=5' };
export const NavItems4: Story = { name: 'Nav.items=4', args: { items: 4 } };
export const NavItems3: Story = { name: 'Nav.items=3', args: { items: 3 } };
