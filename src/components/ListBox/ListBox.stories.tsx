import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta = {
  title: 'Components/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '200px',
    value: {
      value: '1',
      text: 'Option 1'
    },
    selected: '1',
    options: [
      { value: '1', text: 'Option 1' },
      { value: '2', text: 'Option 2' },
      { value: '3', text: 'Option 3' }
    ],
    onChange: (value) => {
      alert(value);
    }
  }
};