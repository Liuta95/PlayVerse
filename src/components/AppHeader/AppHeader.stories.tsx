import type { Meta, StoryObj } from '@storybook/react-vite';
import { StateGrid } from '../../../.storybook/StateGrid';
import { AppHeader } from './AppHeader';

const meta = {
  title: 'PlayVerse/Components/App Header',
  component: AppHeader,
  tags: ['autodocs'],
  args: { title: 'PlayVerse', balance: '1,200' },
  decorators: [(Story) => <div style={{ width: 390 }}><Story /></div>],
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Leaderboard: Story = { args: { title: 'Leaderboard' } };

export const WithoutBalance: Story = { args: { title: 'Wallet', balance: undefined } };

export const AllStates: Story = {
  // Show the story source: the generated JSX snippet can't serialize the states array
  parameters: { docs: { source: { type: 'code' } } },
  render: () => (
    <StateGrid states={[
      { label: 'Brand · balance', node: <AppHeader title="PlayVerse" balance="1,200" /> },
      { label: 'Page', node: <AppHeader title="Wallet" variant="page" /> },
      { label: 'Sub · balance', node: <AppHeader title="Results" variant="sub" balance="1,230" /> },
      { label: 'Back', node: <AppHeader title="Tournament Details" variant="sub" onBack={() => {}} /> },
      { label: 'Back · centered · balance', node: <AppHeader title="Tournament Details" variant="sub" balance="1,200" onBack={() => {}} centered /> },
    ]} />
  ),
};
