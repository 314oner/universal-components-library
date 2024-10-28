/* eslint-disable @typescript-eslint/no-unused-vars */
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.RefButton,
  dark: styles.RefButton_dark,
  blue: styles.RefButton_blue,
  small: 'inline-block',
  medium: 'w-1/2',
  large: 'w-full',
} as const;

export declare interface IRefButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  success?: boolean;
  typical?: boolean;
  color?: 'primary' | 'dark' | 'blue';
  size?: 'small' | 'medium' | 'large';
}

export const RefButton = React.forwardRef<HTMLButtonElement, IRefButtonProps>(
  (
    {
      success = true,
      color = 'primary',
      size,
      typical = false,
      onClick,
      className = styles.RefButton,
      ...rest
    },
    ref,
  ) => {
    /*
    const isTypical = typical
      ? success
        ? `border-[#9FB8AB]`
        : `border-[#E996B0]`
      : `border-[#4B4B4B]`;
    const isSuccess = success ? styles.RefButton_blue : styles.RefButton_dark;
    */
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={twMerge(
          clsx(
            variants[color as keyof typeof variants],
            variants[size as keyof typeof variants],
            className,
            //isSuccess,
            //isTypical,
          ),
        )}
        {...rest}
      />
    );
  },
);

RefButton.displayName = 'RefButton';

export default RefButton;
