import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AnswerButton } from './AnswerButton';

const meta = {
  title: 'PlayVerse/Components/Answer Button',
  component: AnswerButton,
  tags: ['autodocs'],
  args: { label: 'Mars', state: 'default', onClick: fn() },
  argTypes: {
    state: { control: 'inline-radio', options: ['default', 'selected', 'correct', 'incorrect', 'timeout'] },
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof AnswerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = { args: { state: 'selected' } };

export const Correct: Story = { args: { state: 'correct' } };

export const Incorrect: Story = { args: { label: 'Venus', state: 'incorrect', correctAnswer: 'Mars' } };

export const Timeout: Story = { args: { state: 'timeout' } };

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 18 }}>
      <AnswerButton label="Mars" />
      <AnswerButton label="Mars" state="selected" />
      <AnswerButton label="Mars" state="correct" />
      <AnswerButton label="Venus" state="incorrect" correctAnswer="Mars" />
      <AnswerButton label="Mars" state="timeout" />
    </div>
  ),
};
