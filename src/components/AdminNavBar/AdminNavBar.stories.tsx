import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardIcon, HelpIcon, ModerationIcon, TrophyIcon } from './admin-icons';
import { AdminNavBar, AdminNavItem } from './AdminNavBar';

const ITEMS = [
  { label: 'Overview', icon: <DashboardIcon /> },
  { label: 'Tournaments', icon: <TrophyIcon /> },
  { label: 'Questions', icon: <HelpIcon /> },
  { label: 'Moderation', icon: <ModerationIcon /> },
];

type BarArgs = { selected: number };

/** Figma "Admin Nav Bar" (125:917): Active = Overview, Tournaments, Questions, Moderation. The bar fills the width of its container. */
const meta = {
  title: 'Components/Admin Nav Bar',
  parameters: { layout: 'padded' },
  render: ({ selected }: BarArgs) => (
    <AdminNavBar>
      {ITEMS.map((item, index) => (
        <AdminNavItem key={item.label} href="#" icon={item.icon} selected={index === selected}>
          {item.label}
        </AdminNavItem>
      ))}
    </AdminNavBar>
  ),
  args: { selected: 0 },
  argTypes: {
    selected: { control: 'inline-radio', options: [0, 1, 2, 3], description: 'Index of the active item (Figma "Active").' },
  },
} satisfies Meta<BarArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveOverview: Story = { name: 'Active=Overview' };
export const ActiveTournaments: Story = { name: 'Active=Tournaments', args: { selected: 1 } };
export const ActiveQuestions: Story = { name: 'Active=Questions', args: { selected: 2 } };
export const ActiveModeration: Story = { name: 'Active=Moderation', args: { selected: 3 } };
