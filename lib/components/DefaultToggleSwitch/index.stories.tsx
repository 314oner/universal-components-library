import { StoryFn } from '@storybook/react';
import { DefaultToggleSwitch, IDefaultToggleSwitchProps } from './index';

export default {
  component: DefaultToggleSwitch,
};

export const NotToggled: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
NotToggled.args = {
  defaultChecked: false,
};

export const Toggled: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
Toggled.args = {
  defaultChecked: true,
};
