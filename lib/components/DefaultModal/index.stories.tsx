import { StoryFn } from '@storybook/react';
import { DefaultModal, IDefaultModalProps } from './index';

export default {
  component: DefaultModal,
};

export const Default: StoryFn<IDefaultModalProps> = (args) => <DefaultModal {...args} />;
Default.args = {
  isOpen: true,
  onClose: () => {},
  title: 'DefaultModal title',
  children: <>DefaultModal children text</>,
};
