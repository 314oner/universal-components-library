import { StoryFn } from '@storybook/react';
import { IPrimeToggleButtonProps, PrimeToggleButton } from './index';

export default {
  component: PrimeToggleButton,
};

export const Default: StoryFn<IPrimeToggleButtonProps> = (args) => <PrimeToggleButton {...args} />;
Default.args = {
  type: 'checkbox',
  defaultChecked: true,
};
