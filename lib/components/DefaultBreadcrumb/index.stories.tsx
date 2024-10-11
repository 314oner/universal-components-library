import { StoryFn } from '@storybook/react';
import { DefaultBreadcrumb, IDefaultBreadcrumbProps } from './index';

export default {
  component: DefaultBreadcrumb,
};

export const Default: StoryFn<IDefaultBreadcrumbProps> = (args) => <DefaultBreadcrumb {...args} />;
Default.args = {
  items: [
    { label: 'DefaultBreadcrumb1', href: '/1' },
    { label: 'DefaultBreadcrumb2', href: '/2' },
  ],
};
