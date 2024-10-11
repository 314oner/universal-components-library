import { StoryFn } from '@storybook/react';
import { DefaultSpinner, IDefaultSpinnerProps } from './index';

export default {
  component: DefaultSpinner,
};

export const Large: StoryFn<IDefaultSpinnerProps> = (args) => <DefaultSpinner {...args} />;
Large.args = {
  color: 'red',
  size: 'large',
};

export const Medium: StoryFn<IDefaultSpinnerProps> = (args) => <DefaultSpinner {...args} />;
Medium.args = {
  color: 'green',
  size: 'medium',
};

export const Small: StoryFn<IDefaultSpinnerProps> = (args) => <DefaultSpinner {...args} />;
Small.args = {
  color: 'blue',
  size: 'small',
};
