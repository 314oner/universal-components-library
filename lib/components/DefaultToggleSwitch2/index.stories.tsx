import { StoryFn } from '@storybook/react';
import { DefaultToggleSwitch2, IDefaultToggleSwitchProps } from './index';

export default {
  component: DefaultToggleSwitch2,
};

export const Default: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch2 {...args} />
);
Default.args = {
  label: '',
  onChange: () => {},
  initialChecked: false,
};
