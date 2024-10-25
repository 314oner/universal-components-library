/* eslint-disable @typescript-eslint/ban-ts-comment */

import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultSpinner,
  dark: styles.DefaultSpinner_dark,
  blue: 'text-[#0B2447] dark:text-blue-500',
  green: 'text-emerald-600 dark:text-emerald-400',
  red: 'text-red-600 dark:text-red-400',
  yellow: 'text-yellow-600 dark:text-yellow-400',
  small: 'w-4 h-4',
  medium: 'w-8 h-8',
  large: 'w-12 h-12',
} as const;

export declare interface IDefaultSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'dark' | 'blue' | 'green' | 'red' | 'yellow';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultSpinner: React.FC<IDefaultSpinnerProps> = ({
  color = 'primary',
  className = styles.DefaultSpinner,
  size,
  ...rest
}) => {
  const animationFlow = 'animate-spin';
  return (
    <div
      className={twMerge(
        clsx(
          variants[color as keyof typeof variants],
          variants[size as keyof typeof variants],
          className,
          animationFlow,
        ),
      )}
      {...rest}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

DefaultSpinner.displayName = 'DefaultSpinner';

export default DefaultSpinner;
