import { StoryFn } from '@storybook/react';
import { DefaultTooltip, IDefaultTooltipProps } from './index';

export default {
  component: DefaultTooltip,
};

export const Default: StoryFn<IDefaultTooltipProps> = (args) => <DefaultTooltip {...args} />;
Default.args = {
  text: 'DefaultTooltip text',
  children: <>DefaultTooltip children</>,
};
