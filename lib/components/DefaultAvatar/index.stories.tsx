import { StoryFn } from '@storybook/react';
import { DefaultAvatar, IDefaultAvatarProps } from './index';

export default {
  component: DefaultAvatar,
};

export const Large: StoryFn<IDefaultAvatarProps> = (args) => <DefaultAvatar {...args} />;
Large.args = {
  src: 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
  alt: 'DefaultAvatar',
  size: 'large',
};

export const Medium: StoryFn<IDefaultAvatarProps> = (args) => <DefaultAvatar {...args} />;
Medium.args = {
  src: 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
  alt: 'DefaultAvatar',
  size: 'medium',
};

export const Small: StoryFn<IDefaultAvatarProps> = (args) => <DefaultAvatar {...args} />;
Small.args = {
  src: 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
  alt: 'DefaultAvatar',
  size: 'small',
};
