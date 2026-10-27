import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { fn } from 'storybook/test';
import { QuizQuestion } from './QuizQuestion';

const meta = {
  title: 'PlayVerse/Screens/Quiz',
  component: QuizQuestion,
  args: {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    questionNumber: 2,
    totalQuestions: 5,
    phase: 'answering',
    timeLeft: '0:11',
    onAnswer: fn(),
    onClose: fn(),
  },
  argTypes: { phase: { control: 'inline-radio', options: ['answering', 'feedback', 'timeout'] } },
} satisfies Meta<typeof QuizQuestion>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Figma: "Quiz Question" */
export const Question: Story = {};

/** Figma: "Quiz Feedback" */
export const Feedback: Story = { args: { phase: 'feedback', selected: 'Mars', correct: 'Mars', points: 20 } };

export const FeedbackIncorrect: Story = { args: { phase: 'feedback', selected: 'Venus', correct: 'Mars' } };

/** Figma: "State — Question Timeout" */
export const Timeout: Story = { args: { phase: 'timeout' } };

/** Tap an answer to see it resolve */
export const Playable: Story = {
  render: function Render(args) {
    const [selected, setSelected] = useState<string>();
    return (
      <QuizQuestion
        {...args}
        phase={selected ? 'feedback' : 'answering'}
        selected={selected}
        correct="Mars"
        onAnswer={setSelected}
      />
    );
  },
};
