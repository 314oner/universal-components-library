import { StoryFn } from '@storybook/react';
import { DefaultToggleSwitch3, IDefaultToggleSwitchProps } from './index';

export default {
  component: DefaultToggleSwitch3,
};

export const Default: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch3 {...args} />
);
Default.args = {
  label: '',
  onChange: () => {},
  initialChecked: false,
};
