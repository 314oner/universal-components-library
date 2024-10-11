import { StoryFn } from '@storybook/react';
import { DefaultDropdown, IDefaultDropdownProps } from './index';

export default {
  component: DefaultDropdown,
};

export const Default: StoryFn<IDefaultDropdownProps> = (args) => <DefaultDropdown {...args} />;
Default.args = {
  options: ['one', 'two', 'three'],
  onSelect: () => {},
  placeholder: 'DefaultDropdown placeholder',
};
