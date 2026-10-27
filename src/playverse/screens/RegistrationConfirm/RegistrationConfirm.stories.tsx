import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { RegistrationConfirm } from './RegistrationConfirm';

const meta = {
  title: 'PlayVerse/Screens/Registration Confirm',
  component: RegistrationConfirm,
  args: {
    title: 'Friday Night Trivia Blitz',
    format: '5 questions · 15s each',
    entryFee: 50,
    balance: 1200,
    onConfirm: fn(),
    onCancel: fn(),
  },
} satisfies Meta<typeof RegistrationConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
