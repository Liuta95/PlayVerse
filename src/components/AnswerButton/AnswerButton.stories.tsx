import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AnswerButton, type AnswerState } from './AnswerButton';

const meta = {
  title: 'Components/AnswerButton',
  component: AnswerButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    // Figma frame is 358px wide (mobile); the All States story opts out with `parameters.fullWidth`.
    (Story, context) =>
      context.parameters.fullWidth ? (
        <Story />
      ) : (
        <div style={{ width: 358 }}>
          <Story />
        </div>
      ),
  ],
  args: { children: 'Mars', state: 'default', disabled: false, onClick: fn() },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: ['default', 'selected', 'correct', 'incorrect'],
      description: 'Figma "State".',
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof AnswerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { state: 'selected' } };
export const Correct: Story = { args: { state: 'correct' } };
export const Incorrect: Story = { args: { state: 'incorrect' } };

export const LongAnswer: Story = {
  args: { children: 'It is the fourth planet from the Sun and is often called the Red Planet because of iron oxide on its surface' },
};

const STATES: AnswerState[] = ['default', 'selected', 'correct', 'incorrect'];

/** Figma states. Focus-visible is not in Figma: it is forced with `is-focus-visible` to show the added ring. */
export const AllStates: Story = {
  parameters: { layout: 'padded', fullWidth: true },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--spacing-16)', width: 358 }}>
      {STATES.map((state) => (
        <AnswerButton key={state} state={state}>
          Answer
        </AnswerButton>
      ))}
      <AnswerButton className="is-focus-visible">Answer · focus-visible</AnswerButton>
    </div>
  ),
};
