import { StoryFn } from '@storybook/react';
import { DefaultCheckbox, IDefaultCheckboxProps } from './index';

export default {
  component: DefaultCheckbox,
};

export const Checked: StoryFn<IDefaultCheckboxProps> = (args) => <DefaultCheckbox {...args} />;
Checked.args = {
  label: 'DefaultCheckbox label',
  checked: true,
  onChange: () => {},
};

export const NotChecked: StoryFn<IDefaultCheckboxProps> = (args) => <DefaultCheckbox {...args} />;
NotChecked.args = {
  label: 'DefaultCheckbox label',
  checked: false,
  onChange: () => {},
};
