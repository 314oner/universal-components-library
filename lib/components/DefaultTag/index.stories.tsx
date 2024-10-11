import { StoryFn } from '@storybook/react';
import { DefaultTag, IDefaultTagProps } from './index';

export default {
  component: DefaultTag,
};

export const Default: StoryFn<IDefaultTagProps> = (args) => <DefaultTag {...args} />;
Default.args = {
  text: 'DefaultTag text',
  onRemove: () => {},
};
