import { StoryFn } from '@storybook/react';
import { IUncontrolledToggleSwitchProps, UncontrolledToggleSwitch } from './index';

export default {
  component: UncontrolledToggleSwitch,
};

export const NotToggled: StoryFn<IUncontrolledToggleSwitchProps> = (args) => (
  <UncontrolledToggleSwitch {...args} />
);
NotToggled.args = {
  label: 'UncontrolledToggleSwitch label',
  checked: false,
  onChange: () => {},
};

export const Toggled: StoryFn<IUncontrolledToggleSwitchProps> = (args) => (
  <UncontrolledToggleSwitch {...args} />
);
Toggled.args = {
  label: 'UncontrolledToggleSwitch label',
  checked: true,
  onChange: () => {},
};