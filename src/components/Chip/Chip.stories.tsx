import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip, type ChipVariant } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { variant: 'success', children: 'success' },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'danger', 'info', 'warning', 'caution'],
      description: 'Figma "Type".',
    },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { variant: 'neutral', children: 'neutral' } };
export const Success: Story = { args: { variant: 'success', children: 'success' } };
export const Danger: Story = { args: { variant: 'danger', children: 'danger' } };
export const Info: Story = { args: { variant: 'info', children: 'info' } };
export const Warning: Story = { args: { variant: 'warning', children: 'warning' } };
export const Caution: Story = { args: { variant: 'caution', children: 'caution' } };

const VARIANTS: ChipVariant[] = ['neutral', 'success', 'danger', 'info', 'warning', 'caution'];

/** Chip has a single state; Figma only varies the type. */
export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-12)', alignItems: 'center' }}>
      {VARIANTS.map((variant) => (
        <Chip key={variant} variant={variant}>
          {variant}
        </Chip>
      ))}
    </div>
  ),
};
