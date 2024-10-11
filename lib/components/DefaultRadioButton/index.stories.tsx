import { StoryFn } from '@storybook/react';
import { DefaultRadioButton, IDefaultRadioButtonProps } from './index';

export default {
  component: DefaultRadioButton,
};

export const Checked: StoryFn<IDefaultRadioButtonProps> = (args) => (
  <DefaultRadioButton {...args} />
);
Checked.args = {
  label: 'DefaultRadioButton label',
  name: 'DefaultRadioButton name',
  value: 'DefaultRadioButton value',
  checked: true,
  onChange: () => {},
};

export const NotChecked: StoryFn<IDefaultRadioButtonProps> = (args) => (
  <DefaultRadioButton {...args} />
);
NotChecked.args = {
  label: 'DefaultRadioButton label',
  name: 'DefaultRadioButton name',
  value: 'DefaultRadioButton value',
  checked: false,
  onChange: () => {},
};
