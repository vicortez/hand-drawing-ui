import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: [ 'autodocs' ],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
    onChange: (checked: boolean) => {
      alert(`checked: ${checked}`);
    }
  }
};

export const UnChecked: Story = {
  args: {
    checked: false,
    onChange: (checked: boolean) => {
      alert(`checked: ${checked}`);
    }
  }
};