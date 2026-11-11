import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="4.75" stroke="currentColor" strokeWidth="1.5" />
    <path d="m10.5 10.5 3.25 3.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="11" height="6" viewBox="0 0 11 6" fill="none" aria-hidden="true">
    <path d="m1 1 4.5 4L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    // Figma frame is 278px wide; the All States grid opts out with `parameters.fullWidth`.
    (Story, context) =>
      context.parameters.fullWidth ? (
        <Story />
      ) : (
        <div style={{ width: 278 }}>
          <Story />
        </div>
      ),
  ],
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
    error: false,
    disabled: false,
    iconLeft: <SearchIcon />,
  },
  argTypes: {
    label: { control: 'text', description: 'Figma "Label" toggle: leave empty to hide.' },
    placeholder: { control: 'text' },
    required: { control: 'boolean', description: 'Red asterisk + native `required`.' },
    rightText: { control: false, description: 'Figma "Right helper text".' },
    iconLeft: { control: false, description: 'Figma "Left icon".' },
    iconRight: { control: false, description: 'Figma "Dropdown" chevron or a clear icon.' },
    error: { control: 'boolean', description: 'Figma "Error" state. Sets `aria-invalid`.' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = { args: { defaultValue: 'Friday Night Trivia' } };

export const WithRightTextAndDropdown: Story = {
  args: {
    label: 'Amount',
    placeholder: 'Select an option',
    rightText: (
      <>
        Available balance: <strong>1,200 coins</strong>
      </>
    ),
    iconRight: <ChevronIcon />,
  },
};

export const WithoutLabel: Story = { args: { label: undefined, required: false, 'aria-label': 'Search' } };

export const Error: Story = { args: { error: true, defaultValue: 'Not a valid nickname' } };

export const Disabled: Story = { args: { disabled: true, defaultValue: 'Locked value' } };

/** Figma states. Active and Focused are forced with the `is-active` / `is-focused` classes so they can be shown side by side. */
const STATES: { name: string; props: Record<string, unknown> }[] = [
  { name: 'Default', props: {} },
  { name: 'Active', props: { className: 'is-active' } },
  { name: 'Focused', props: { className: 'is-focused' } },
  { name: 'Error', props: { error: true } },
  { name: 'Disabled', props: { disabled: true } },
];

const head = {
  color: 'var(--text-tertiary)',
  fontFamily: 'var(--font-family-body)',
  fontSize: 'var(--font-size-12)',
} as const;

export const AllStates: Story = {
  parameters: { layout: 'padded', fullWidth: true },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '90px 278px 278px', gap: 'var(--spacing-24) var(--spacing-24)', alignItems: 'start', overflowX: 'auto' }}>
      <span />
      <span style={head}>Filled = false</span>
      <span style={head}>Filled = true</span>
      {STATES.map((s) => (
        <div key={s.name} style={{ display: 'contents' }}>
          <span style={{ ...head, paddingTop: 'var(--spacing-24)' }}>{s.name}</span>
          <Input label="Label" required placeholder="Placeholder" iconLeft={<SearchIcon />} {...s.props} />
          <Input label="Label" required defaultValue="Placeholder" iconLeft={<SearchIcon />} {...s.props} />
        </div>
      ))}
    </div>
  ),
};
