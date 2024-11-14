import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Card } from '../Card/Card';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: 'Tab 1',
    elevation: 1,
    width: '300px',
    tabs: [
      {
        title: 'Tab 1',
        content: (
          <div>
            <h3>Welcome to Tab 1</h3>
            <p>This is the content for the first tab. It can contain any React elements.</p>
          </div>
        ),
      },
      {
        title: 'Tab 2',
        content: (
          <div>
            <h3>Tab 2 Content</h3>
            <Card elevation={2}>
              <p>You can even nest other wired components inside tabs!</p>
            </Card>
          </div>
        ),
      },
      {
        title: 'Tab 3',
        content: (
          <div>
            <h3>Tab 3 Features</h3>
            <ul>
              <li>Fully customizable</li>
              <li>Maintains wired look</li>
              <li>Keyboard accessible</li>
            </ul>
          </div>
        ),
      },
    ],
    onChange: (selected) => console.log(`Selected tab: ${selected}`),
  },
};