import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { StateGrid } from '../../../.storybook/StateGrid';
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
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid states={[
      { label: 'Default', node: <AnswerButton label="Mars" /> },
      { label: 'Selected · locked in', node: <AnswerButton label="Mars" state="selected" /> },
      { label: 'Correct', node: <AnswerButton label="Mars" state="correct" /> },
      { label: 'Incorrect', node: <AnswerButton label="Venus" state="incorrect" correctAnswer="Mars" /> },
      { label: 'Timeout · no answer', node: <AnswerButton label="Mars" state="timeout" /> },
      { label: 'Dimmed (after lock-in)', node: <AnswerButton label="Venus" state="dimmed" /> },
      { label: 'Missed (time ran out)', node: <AnswerButton label="Venus" state="missed" /> },
      { label: 'Size = lg · correct', node: <AnswerButton label="Mars" size="lg" state="correct" /> },
    ]} />
  ),
};
