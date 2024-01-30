import { MouseEventHandler } from 'react'
import styles from './index.module.css'
import React from 'react'
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const variants = {
  primary: styles.button_blue,
  dark: styles.button_dark,
  small: "inline-block",
  medium: "w-64",
  large: "w-96"
} as const;

export declare interface IDefaultLongButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLElement>
  success?: boolean //success ? styles.button_blue : styles.button_dark
  color?: 'primary' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultLongButton = React.forwardRef<HTMLButtonElement, IDefaultLongButtonProps>(
  ({ success = true, size = "medium", color, onClick, className = styles.button, ...rest }, ref) => {
    const isSuccess = success ?
      styles.button_blue
      :
      styles.button_dark
    return (
      <button
        ref={ref}
        className={twMerge(clsx(variants[color as keyof typeof variants], variants[size as keyof typeof variants], className, isSuccess))}
        {...rest}
      />
    )
  }
);

DefaultLongButton.displayName = 'DefaultLongButton';

export default DefaultLongButton;
