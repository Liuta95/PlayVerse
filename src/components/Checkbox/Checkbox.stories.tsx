import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { label: 'Checkbox', defaultChecked: false, error: false, disabled: false, onChange: fn() },
  argTypes: {
    label: { control: 'text', description: 'Text next to the box. Without it, pass `aria-label`.' },
    defaultChecked: { control: 'boolean', description: 'Figma "Status": Active = checked.' },
    checked: { control: 'boolean', description: 'Controlled checked state.' },
    error: { control: 'boolean', description: 'Figma "Error" state.' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Error: Story = { args: { error: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };
export const WithoutLabel: Story = { args: { label: undefined, 'aria-label': 'Accept rules' } };

const ROWS = [
  { name: 'Default', props: {} },
  { name: 'Hover', props: { className: 'is-hover' } },
  { name: 'Focused', props: { className: 'is-focus-visible' } },
  { name: 'Disabled', props: { disabled: true } },
  { name: 'Error', props: { error: true } },
];

/** Figma grid: rows are states, columns are Status Inactive / Active. Hover and Focused are forced with `is-hover` / `is-focus-visible`. Error + Active is not drawn in Figma. */
export const AllStates: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        alignItems: 'center',
        columnGap: 'var(--spacing-40)',
        rowGap: 'var(--spacing-24)',
        color: 'var(--content-subtle)',
        fontFamily: 'var(--font-family-body)',
        fontSize: 'var(--font-size-12)',
      }}
    >
      <span />
      <span>Inactive</span>
      <span>Active</span>
      {ROWS.map(({ name, props }) => (
        <div key={name} style={{ display: 'contents' }}>
          <span>{name}</span>
          <Checkbox label="Checkbox" {...props} />
          {name === 'Error' ? <span /> : <Checkbox label="Checkbox" defaultChecked {...props} />}
        </div>
      ))}
    </div>
  ),
};
