import { StoryFn } from '@storybook/react';
import { DefaultCard, IDefaultCardProps } from './index';

export default {
  component: DefaultCard,
};

export const Default: StoryFn<IDefaultCardProps> = (args) => <DefaultCard {...args} />;
Default.args = {
  title: 'DefaultCard title',
  description: 'DefaultCard description',
  imageUrl: 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
};
