import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultButton,
  dark: styles.DefaultButton_dark,
  small: 'inline-block',
  medium: 'w-1/2',
  large: 'w-full',
  cyan: 'text-[#06B6D4] dark:text-[#22D3EE] border-[#06B6D4] dark:border-[#22D3EE] shadow-[7px_7px_0px_0px_#06B6D4] dark:shadow-[7px_7px_0px_0px_#22D3EE] hover:shadow-none',
  blue: 'text-[#60A5FA] dark:text-[#93C5FD] border-[#60A5FA] dark:border-[#93C5FD] shadow-[7px_7px_0px_0px_#60A5FA] dark:shadow-[7px_7px_0px_0px_#93C5FD] hover:shadow-none',
  yellow:
    'text-[#FACC14] dark:text-[#FDE047] border-[#FACC14] dark:border-[#FDE047] shadow-[7px_7px_0px_0px_#FACC14] dark:shadow-[7px_7px_0px_0px_#FDE047] hover:shadow-none',
  orange:
    'text-[#FB923C] dark:text-[#FDBA74] border-[#FB923C] dark:border-[#FDBA74] shadow-[7px_7px_0px_0px_#FB923C] dark:shadow-[7px_7px_0px_0px_#FDBA74] hover:shadow-none',
} as const;

export declare interface IDefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'cyan' | 'blue' | 'yellow' | 'orange';
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const DefaultButton: React.FC<IDefaultButtonProps> = ({
  size,
  children,
  onClick,
  color = 'primary',
  icon,
  className = styles.DefaultButton,
}) => {
  return (
    <button
      className={twMerge(
        clsx(
          variants[color as keyof typeof variants],
          variants[size as keyof typeof variants],
          className,
        ),
      )}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};
DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;
