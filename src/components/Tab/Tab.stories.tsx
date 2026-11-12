import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tab } from './Tab';

/** Figma "Tabs" (266:1663), Selected = No. Hover and Focused are forced with `is-hover` / `is-focus-visible`. */
const meta = {
  title: 'Components/Tab/Unselected',
  component: Tab,
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div role="tablist" aria-label="Tab">
        <Story />
      </div>
    ),
  ],
  args: { children: 'Tab Text', selected: false, onClick: fn() },
  argTypes: {
    children: { control: 'text', description: 'Figma "Text".' },
    selected: { table: { disable: true } },
    disabled: { table: { disable: true } },
    className: { table: { disable: true } },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { className: 'is-hover' } };
export const Focused: Story = { args: { className: 'is-focus-visible' } };
export const Disabled: Story = { args: { disabled: true } };
