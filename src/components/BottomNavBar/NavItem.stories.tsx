import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon } from './nav-icons';
import { NavItem } from './BottomNavBar';

/** Figma "Nav.item" (213:3245): Default, Hover, Pressed (Selected = Yes). Hover is forced with `is-hover`. */
const meta = {
  title: 'Components/Bottom Nav Bar/Nav.item',
  component: NavItem,
  parameters: { layout: 'centered' },
  args: { children: 'Text', icon: <HomeIcon />, href: '#', selected: false },
  argTypes: {
    children: { control: 'text', description: 'Figma "Text".' },
    icon: { control: false, description: '20px icon slot.' },
    href: { control: 'text' },
    selected: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { className: 'is-hover' } };
export const Pressed: Story = { args: { selected: true } };
