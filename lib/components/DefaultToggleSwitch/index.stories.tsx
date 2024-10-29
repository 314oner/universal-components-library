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
  size: 'small',
  onChange: () => {},
  className: '',
  initialChecked: false,
};

export const DefaultSmall: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
DefaultSmall.args = {
  label: '',
  onChange: () => {},
  className: '',
  size: 'small',
  initialChecked: false,
};

export const DefaultMedium: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
DefaultMedium.args = {
  label: '',
  onChange: () => {},
  className: '',
  size: 'medium',
  initialChecked: false,
};

export const DefaultLarge: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
DefaultLarge.args = {
  label: '',
  onChange: () => {},
  className: '',
  size: 'large',
  initialChecked: false,
};

export const StyledParentPink: StoryFn<IDefaultToggleSwitchProps> = (args) => (
  <DefaultToggleSwitch {...args} />
);
StyledParentPink.args = {
  label: '',
  onChange: () => {},
  size: 'medium',
  className: 'border-pink-600 bg-pink-600',
  initialChecked: false,
};
