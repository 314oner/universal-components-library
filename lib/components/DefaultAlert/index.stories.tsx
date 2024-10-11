import { StoryFn } from '@storybook/react';
import { DefaultAlert, IDefaultAlertProps } from './index';

export default {
  component: DefaultAlert,
};

export const Success: StoryFn<IDefaultAlertProps> = (args) => <DefaultAlert {...args} />;
Success.args = {
  type: 'success',
  message: 'DefaultAlertMessage',
};


export const Warning: StoryFn<IDefaultAlertProps> = (args) => <DefaultAlert {...args} />;
Warning.args = {
  type: 'warning',
  message: 'DefaultAlertMessage',
};

export const Error: StoryFn<IDefaultAlertProps> = (args) => <DefaultAlert {...args} />;
Error.args = {
  type: 'error',
  message: 'DefaultAlertMessage',
};

export const Info: StoryFn<IDefaultAlertProps> = (args) => <DefaultAlert {...args} />;
Info.args = {
  type: 'info',
  message: 'DefaultAlertMessage',
};
