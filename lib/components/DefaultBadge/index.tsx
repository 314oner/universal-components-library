import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultBadge,
  info: 'bg-gray-100 text-gray-800 border-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-200',
  error:
    'bg-red-100 text-red-800 border-red-800 dark:bg-red-900 dark:text-red-200 dark:border-red-200',
  warning:
    'bg-yellow-100 text-yellow-800 border-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-200',
  success:
    'bg-emerald-100 text-emerald-800 border-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-200',
} as const;

export declare interface IDefaultBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: 'primary';
  type?: 'success' | 'warning' | 'error' | 'info';
}

export const DefaultBadge: React.FC<IDefaultBadgeProps> = ({
  text,
  color = 'primary',
  type = 'info',
  className = styles.DefaultBadge,
}) => {
  return (
    <div>
      <span
        className={twMerge(
          clsx(
            variants[type as keyof typeof variants],
            variants[color as keyof typeof variants],
            className,
          ),
        )}
      >
        {text}
      </span>
    </div>
  );
};

DefaultBadge.displayName = 'DefaultBadge';

export default DefaultBadge;
