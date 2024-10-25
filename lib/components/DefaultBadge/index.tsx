import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultBadge,
  dark: styles.DefaultBadge_dark,
  gray: 'bg-gray-100 text-gray-800 border-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-200',
  red: 'bg-red-100 text-red-800 border-red-800 dark:bg-red-900 dark:text-red-200 dark:border-red-200',
  yellow:
    'bg-yellow-100 text-yellow-800 border-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-200',
  green:
    'bg-emerald-100 text-emerald-800 border-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-800 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-200',
  indigo:
    'bg-indigo-100 text-indigo-800 border-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-200',
  purple:
    'bg-purple-100 text-purple-800 border-purple-800 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-200',
  pink: 'bg-pink-100 text-pink-800 border-pink-800 dark:bg-pink-900 dark:text-pink-200 dark:border-pink-200',
} as const;

export declare interface IDefaultBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?:
    | 'primary'
    | 'dark'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple';
}

export const DefaultBadge: React.FC<IDefaultBadgeProps> = ({
  text,
  color = 'primary',
  className = styles.DefaultBadge,
}) => {
  return (
    <div>
      <span
        className={twMerge(
          clsx(variants[color as keyof typeof variants], className),
        )}
      >
        {text}
      </span>
    </div>
  );
};

DefaultBadge.displayName = 'DefaultBadge';

export default DefaultBadge;
