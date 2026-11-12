import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

/** Figma "Alerts" (226:1670): Info, Warning, Error, Success. The alert fills the width of its container. */
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'padded' },
  args: { children: 'Only send to a TON address. Other networks will lose the funds.', state: 'info' },
  argTypes: {
    children: { control: 'text', description: 'Figma "Text".' },
    state: { table: { disable: true } },
    className: { table: { disable: true } },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Warning: Story = { args: { state: 'warning' } };
export const Error: Story = { args: { state: 'error' } };
export const Success: Story = { args: { state: 'success' } };
