import { StoryFn } from '@storybook/react';
import { StaticToggleButton } from './index';

export default {
  component: StaticToggleButton,
};

export const Default: StoryFn = (args) => <StaticToggleButton {...args} />;
Default.args = {
  type: 'checkbox',
  defaultChecked: true,
};
