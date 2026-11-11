import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
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
    rows: 2,
  },
  argTypes: {
    label: { control: 'text', description: 'Leave empty to hide the label row.' },
    placeholder: { control: 'text' },
    required: { control: 'boolean', description: 'Red asterisk + native `required`.' },
    error: { control: 'boolean', description: 'Figma "Error" state. Sets `aria-invalid`.' },
    disabled: { control: 'boolean' },
    rows: { control: { type: 'number', min: 1, max: 12 }, description: 'Visible lines. Figma shows 2.' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: { defaultValue: 'Which planet is known as the Red Planet? Add a short hint players can unlock.' },
};

export const WithoutLabel: Story = { args: { label: undefined, required: false, 'aria-label': 'Question hint' } };

export const Error: Story = { args: { error: true, defaultValue: 'Too short' } };

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
    <div style={{ display: 'grid', gridTemplateColumns: '90px 278px 278px', gap: 'var(--spacing-24)', alignItems: 'start', overflowX: 'auto' }}>
      <span />
      <span style={head}>Filled = false</span>
      <span style={head}>Filled = true</span>
      {STATES.map((s) => (
        <div key={s.name} style={{ display: 'contents' }}>
          <span style={{ ...head, paddingTop: 'var(--spacing-24)' }}>{s.name}</span>
          <Textarea label="Label" required placeholder="Placeholder" {...s.props} />
          <Textarea label="Label" required defaultValue="Placeholder" {...s.props} />
        </div>
      ))}
    </div>
  ),
};
