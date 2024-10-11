// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultAvatar,
  dark: styles.DefaultAvatar_dark,
  small: 'w-8 h-8',
  medium: 'w-12 h-12',
  large: 'w-16 h-16',
} as const;

export declare interface IDefaultAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  color?: 'primary' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultAvatar: React.FC<IDefaultAvatarProps> = ({
  src,
  alt,
  color,
  size,
  className = styles.DefaultAvatar,
}) => {
  return (
      <img
        className={twMerge(
          clsx(
            variants[color as keyof typeof variants],
            variants[size as keyof typeof variants],
            className,
          ),
        )}
        src={src}
        alt={alt}
      />
  );
};

DefaultAvatar.displayName = 'DefaultAvatar';

export default DefaultAvatar;
