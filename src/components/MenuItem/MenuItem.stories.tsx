import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TrophyIcon } from '../placeholder-icons';
import { MenuItem } from './MenuItem';

const meta = {
  title: 'Components/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    // Figma frame is 197px wide; the All States grid opts out with `parameters.fullWidth`.
    (Story, context) =>
      context.parameters.fullWidth ? (
        <Story />
      ) : (
        <div style={{ width: 197, background: 'var(--sidebar-bg-primary)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius-16)' }}>
          <Story />
        </div>
      ),
  ],
  args: {
    children: 'Tournaments',
    variant: 'main',
    active: false,
    expandable: false,
    icon: <TrophyIcon />,
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['main', 'secondary'], description: 'Figma "Type".' },
    active: { control: 'boolean', description: 'Figma "Active" state. Sets `aria-current="page"`.' },
    expandable: { control: 'boolean', description: 'Trailing chevron for an item with a sub-menu.' },
    expanded: { control: 'boolean', description: 'Sets `aria-expanded` on expandable items.' },
    icon: { control: false, description: 'Figma "show left icon". Not shown by `secondary`.' },
    children: { control: 'text', description: 'Figma "Text".' },
    href: { control: 'text', description: 'Renders a link instead of a button.' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};
export const Active: Story = { args: { active: true, children: 'Overview' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Question bank' } };
export const WithChevron: Story = { args: { expandable: true, expanded: false, children: 'Questions' } };
export const AsLink: Story = { args: { href: '#tournaments' } };

const head = { color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-body)', fontSize: 'var(--font-size-12)' } as const;

const STATES = [
  { name: 'Default', props: {} },
  { name: 'Hover', props: { className: 'is-hover' } },
  { name: 'Active', props: { active: true } },
  { name: 'Focus-visible', props: { className: 'is-focus-visible' } },
];

/** Figma states. Hover is forced with `is-hover` (it also works with the real pointer). Focus-visible is not in Figma: it is the added keyboard ring. */
export const AllStates: Story = {
  parameters: { layout: 'padded', fullWidth: true },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '90px repeat(4, 197px)', gap: 'var(--spacing-16)', alignItems: 'center', background: 'var(--sidebar-bg-primary)', padding: 'var(--spacing-24)', borderRadius: 'var(--radius-16)', overflowX: 'auto' }}>
      <span />
      {STATES.map((s) => (
        <span key={s.name} style={head}>{s.name}</span>
      ))}
      <span style={head}>Main</span>
      {STATES.map((s) => (
        <MenuItem key={s.name} icon={<TrophyIcon />} {...s.props}>Tournaments</MenuItem>
      ))}
      <span style={head}>Main + chevron</span>
      {STATES.map((s) => (
        <MenuItem key={s.name} icon={<TrophyIcon />} expandable {...s.props}>Questions</MenuItem>
      ))}
      <span style={head}>Secondary</span>
      {STATES.map((s) => (
        <MenuItem key={s.name} variant="secondary" {...s.props}>Question bank</MenuItem>
      ))}
    </div>
  ),
};
