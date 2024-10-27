import { StoryFn } from '@storybook/react';
import { DefaultBadge, IDefaultBadgeProps } from './index';

export default {
  component: DefaultBadge,
};

export const Info: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Info.args = {
  text: 'DefaultBadge',
  type: 'info',
};

export const Error: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Error.args = {
  text: 'DefaultBadge',
  type: 'error',
};

export const Warning: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Warning.args = {
  text: 'DefaultBadge',
  type: 'warning',
};

export const Success: StoryFn<IDefaultBadgeProps> = (args) => <DefaultBadge {...args} />;
Success.args = {
  text: 'DefaultBadge',
  type: 'success',
};
