import { StoryFn } from '@storybook/react';
import { DefaultBadge, IDefaultBadgeProps } from './index';

export default {
  component: DefaultBadge,
};

export const Gray: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Gray.args = {
  text: 'DefaultBadge',
  color: 'gray',
};

export const Red: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Red.args = {
  text: 'DefaultBadge',
  color: 'red',
};

export const Yellow: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Yellow.args = {
  text: 'DefaultBadge',
  color: 'yellow',
};

export const Green: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Green.args = {
  text: 'DefaultBadge',
  color: 'green',
};

export const Indigo: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Indigo.args = {
  text: 'DefaultBadge',
  color: 'indigo',
};

export const Purple: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Purple.args = {
  text: 'DefaultBadge',
  color: 'purple',
};
