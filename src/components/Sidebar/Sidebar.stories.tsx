import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItem } from '../MenuItem';
import {
  DashboardIcon,
  GroupIcon,
  HelpIcon,
  SavingsIcon,
  SettingsIcon,
  ShieldIcon,
  TrophyIcon,
} from '../placeholder-icons';
import { Sidebar } from './Sidebar';

const USER = { name: 'Sam Keller', role: 'Super admin', initials: 'SK' };

const ITEMS = [
  { id: 'overview', label: 'Overview', icon: <DashboardIcon /> },
  { id: 'tournaments', label: 'Tournaments', icon: <TrophyIcon /> },
  { id: 'questions', label: 'Questions', icon: <HelpIcon />, children: ['Question bank', 'AI generator'] },
  { id: 'players', label: 'Players', icon: <GroupIcon /> },
  { id: 'economy', label: 'Economy', icon: <SavingsIcon /> },
  { id: 'moderation', label: 'Moderation', icon: <ShieldIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

/** Static menu for the args-driven stories: "Overview" is the current page. */
const StaticMenu = () => (
  <>
    {ITEMS.map((item) => (
      <MenuItem key={item.id} icon={item.icon} active={item.id === 'overview'} expandable={Boolean(item.children)}>
        {item.label}
      </MenuItem>
    ))}
  </>
);

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    // The sidebar fills the height of its container; Figma frame is 900px tall.
    (Story, context) =>
      context.parameters.fullWidth ? (
        <Story />
      ) : (
        <div style={{ height: 720 }}>
          <Story />
        </div>
      ),
  ],
  args: { collapsed: false, user: USER, navLabel: 'Main', children: <StaticMenu /> },
  argTypes: {
    collapsed: { control: 'boolean', description: 'Figma "State": Expanded (240px) / Collapsed (80px).' },
    user: { control: 'object', description: 'Account card; avatar only when collapsed.' },
    navLabel: { control: 'text' },
    onCollapsedChange: { control: false, description: 'Shows the toggle; called with the next value.' },
    children: { control: false },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Expanded: Story = {};
export const Collapsed: Story = { args: { collapsed: true } };

/** Working example: the toggle collapses the rail, items select a page, "Questions" opens its sub-items. */
export const Interactive: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false);
    const [page, setPage] = useState('overview');
    const [open, setOpen] = useState(true);
    return (
      <Sidebar {...args} collapsed={collapsed} onCollapsedChange={setCollapsed}>
        {ITEMS.map((item) =>
          item.children ? (
            <div key={item.id} style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
              <MenuItem icon={item.icon} expandable expanded={open} onClick={() => setOpen(!open)}>
                {item.label}
              </MenuItem>
              {open &&
                item.children.map((child) => (
                  <MenuItem key={child} variant="secondary" active={page === child} onClick={() => setPage(child)}>
                    {child}
                  </MenuItem>
                ))}
            </div>
          ) : (
            <MenuItem key={item.id} icon={item.icon} active={page === item.id} onClick={() => setPage(item.id)}>
              {item.label}
            </MenuItem>
          ),
        )}
      </Sidebar>
    );
  },
};

/** Both Figma states side by side. */
export const AllStates: Story = {
  parameters: { layout: 'padded', fullWidth: true },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--spacing-24)', height: 720 }}>
      <Sidebar {...args} collapsed={false}>
        <StaticMenu />
      </Sidebar>
      <Sidebar {...args} collapsed>
        <StaticMenu />
      </Sidebar>
    </div>
  ),
};
