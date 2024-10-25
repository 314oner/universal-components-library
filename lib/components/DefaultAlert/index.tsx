import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultAlert,
  small: 'inline-block',
  medium: 'w-80',
  large: 'w-96',
  success: 'bg-emerald-100 text-emerald-800 border-emerald-800',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-800',
  error: 'bg-red-100 text-red-800 border-red-800',
  info: 'bg-blue-100 text-blue-800 border-blue-800',
} as const;

export declare interface IDefaultAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'primary' | 'success' | 'warning' | 'error' | 'info';
  message: string;
  size?: 'small' | 'medium' | 'large';
}

export const DefaultAlert: React.FC<IDefaultAlertProps> = ({
  type = 'primary',
  message,
  size,
  className = styles.DefaultAlert,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          variants[size as keyof typeof variants],
          variants[type as keyof typeof variants],
          className,
        ),
      )}
      role="alert"
    >
      <div className="flex items-center">
        <span className="mr-2 font-bold">{type.charAt(0).toUpperCase() + type.slice(1)}:</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

DefaultAlert.displayName = 'DefaultAlert';

export default DefaultAlert;
