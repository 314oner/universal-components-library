import { StoryFn } from '@storybook/react';
import { IRefButtonProps, RefButton } from './index';

export default {
  component: RefButton,
};

export const Default: StoryFn<IRefButtonProps> = (args) => <RefButton {...args} />;
Default.args = {
  children: 'Click me',
  success: true,
  typical: true,
  onClick: () => {},
};

export const Success: StoryFn<IRefButtonProps> = (args) => <RefButton {...args} />;
Success.args = {
  children: 'Click me',
  success: true,
  typical: false,
  onClick: () => {},
};

export const Interrupt: StoryFn<IRefButtonProps> = (args) => <RefButton {...args} />;
Interrupt.args = {
  children: 'Click me',
  success: false,
  typical: true,
  onClick: () => {},
};
