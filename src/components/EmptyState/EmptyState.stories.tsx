import type { Meta, StoryObj } from '@storybook/react-vite';
import calendar from '../../assets/icons/calendar.svg';
import users from '../../assets/icons/users.svg';
import { IconBadge } from '../IconBadge';
import { SecondaryButton } from '../SecondaryButton';
import { EmptyState } from './EmptyState';

const meta = {
  title: 'PlayVerse/Components/Empty State',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    icon: <IconBadge icon={calendar} iconSize={32} size={76} outlined />,
    title: 'Nothing live right now',
    description: 'The next tournament, Weekend Sports Rally, starts in 2h 14m.',
    iconGap: 22,
  },
  decorators: [(Story) => <div style={{ width: 358 }}><Story /></div>],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {
  args: {
    children: <div style={{ marginTop: 24 }}><SecondaryButton label="Remind Me" compact /></div>,
  },
};

export const TournamentFull: Story = {
  args: {
    icon: <IconBadge icon={users} iconSize={28} size={64} outlined />,
    title: 'This tournament is full',
    description: 'Friday Night Trivia Blitz has reached its player limit. Try one of these instead:',
    iconGap: 20,
  },
};
