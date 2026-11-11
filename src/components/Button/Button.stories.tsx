import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonVariant } from './Button';

/** Placeholder icon (Figma uses a "Diamond" placeholder). Strokes follow the button's icon colour token. */
const DiamondIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M9 1.5 16.5 9 9 16.5 1.5 9 9 1.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
    error: false,
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'icon-with-bg', 'icon-without-bg'],
      description: 'Figma "Type". Icon variants render only `iconLeft` and need an `aria-label`.',
    },
    size: { control: 'inline-radio', options: ['large', 'medium'], description: 'Large = 48px, Medium = 44px.' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean', description: 'Sets `aria-busy`, ignores clicks, stays focusable.' },
    error: { control: 'boolean' },
    selected: { control: 'boolean', description: 'Toggle state. Sets `aria-pressed`. Leave unset for a normal button.' },
    iconLeft: { control: false },
    iconRight: { control: false },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', iconLeft: <DiamondIcon />, iconRight: <DiamondIcon /> },
};

export const Secondary: Story = {
  args: { variant: 'secondary', iconLeft: <DiamondIcon />, iconRight: <DiamondIcon /> },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', iconLeft: <DiamondIcon />, iconRight: <DiamondIcon /> },
};

export const IconWithBackground: Story = {
  args: { variant: 'icon-with-bg', iconLeft: <DiamondIcon />, 'aria-label': 'Settings', children: undefined },
};

export const IconWithoutBackground: Story = {
  args: { variant: 'icon-without-bg', iconLeft: <DiamondIcon />, 'aria-label': 'Settings', children: undefined },
};

const VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'tertiary', 'icon-with-bg', 'icon-without-bg'];

/** Figma states. Pressed and Focus-visible are forced with the `is-pressed` / `is-focus-visible` classes so they can be shown side by side. */
const STATES: { name: string; props: Record<string, unknown> }[] = [
  { name: 'Default', props: {} },
  { name: 'Pressed', props: { className: 'is-pressed' } },
  { name: 'Focus-visible', props: { className: 'is-focus-visible' } },
  { name: 'Selected', props: { selected: true } },
  { name: 'Error', props: { error: true } },
  { name: 'Loading', props: { loading: true } },
  { name: 'Disabled', props: { disabled: true } },
];

const cell = { display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-12)' } as const;
const head = { color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-body)', fontSize: 'var(--font-size-12)', padding: 'var(--spacing-8)' } as const;

const Matrix = ({ size }: { size: 'large' | 'medium' }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `140px repeat(${STATES.length}, max-content)`, alignItems: 'center', overflowX: 'auto' }}>
    <span />
    {STATES.map((s) => (
      <span key={s.name} style={{ ...head, textAlign: 'center' }}>{s.name}</span>
    ))}
    {VARIANTS.map((variant) => {
      const iconOnly = variant.startsWith('icon');
      return (
        <div key={variant} style={{ display: 'contents' }}>
          <span style={head}>{variant}</span>
          {STATES.map((s) => (
            <div key={s.name} style={cell}>
              <Button
                variant={variant}
                size={size}
                iconLeft={<DiamondIcon />}
                iconRight={iconOnly ? undefined : <DiamondIcon />}
                aria-label={iconOnly ? 'Settings' : undefined}
                {...s.props}
              >
                {iconOnly ? undefined : 'Button'}
              </Button>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

export const AllStates: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-40)' }}>
      <section>
        <h3 style={{ ...head, fontSize: 'var(--font-size-14)' }}>Large · 48px</h3>
        <Matrix size="large" />
      </section>
      <section>
        <h3 style={{ ...head, fontSize: 'var(--font-size-14)' }}>Medium · 44px</h3>
        <Matrix size="medium" />
      </section>
    </div>
  ),
};
