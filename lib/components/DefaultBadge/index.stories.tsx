import { StoryFn } from '@storybook/react';
import { DefaultBadge, IDefaultBadgeProps } from './index';

export default {
  component: DefaultBadge,
};

export const Gray: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Gray.args = {
  text: 'DefaultBadge',
  type: 'info',
};

export const Red: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Red.args = {
  text: 'DefaultBadge',
  type: 'error',
};

export const Yellow: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Yellow.args = {
  text: 'DefaultBadge',
  type: 'warning',
};

export const Green: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Green.args = {
  text: 'DefaultBadge',
  type: 'success',
};

