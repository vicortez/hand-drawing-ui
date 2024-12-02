import { StoryFn, Meta } from '@storybook/react';
import { DateTimePicker } from './DateTimePicker';
import dayjs from 'dayjs';

export default {
  title: 'Components/DateTimePicker',
  component: DateTimePicker,
} as Meta;

const Template: StoryFn<typeof DateTimePicker> = (args) => <DateTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: dayjs(),
};
