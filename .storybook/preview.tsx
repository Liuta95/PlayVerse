import type { Preview } from '@storybook/react-vite'
import '../src/playverse/tokens.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="pv-root" style={{ padding: 24, minHeight: '100%' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      options: { playverse: { name: 'PlayVerse', value: '#101014' } },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  initialGlobals: {
    backgrounds: { value: 'playverse' },
  },
};

export default preview;
