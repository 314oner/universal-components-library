import { StoryFn } from '@storybook/react';
import { DefaultToggleSwitch, IDefaultToggleSwitchProps } from './index';

export default {
  component: DefaultToggleSwitch,
};

export const Default: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
Default.args = {
  label: '',
  onChange: () => {},
  initialChecked: false,
};
