/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultInput,
  small: 'inline-block',
  medium: 'w-1/2',
  large: 'w-full',
} as const;
//@ts-ignore
export declare interface IDefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  color?: 'primary';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultInput: React.FC<IDefaultInputProps> = ({
  label,
  error,
  icon,
  size,
  color = 'primary',
  className = styles.DefaultInput,
  ...rest
}) => {
  //@ts-ignore
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={twMerge(
        clsx(
          variants[color as keyof typeof variants],
          variants[size as keyof typeof variants],
          className,
        ),
      )}
    >
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          {...rest}
          className={`w-full px-4 py-2 ${
            icon ? 'pl-10' : ''
          } bg-white dark:bg-gray-800 border-2 border-[#0B2447] dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2447] dark:focus:ring-white transition-all duration-300 ${
            error
              ? 'border-red-500 dark:border-red-400 focus:ring-red-500 dark:focus:ring-red-400'
              : ''
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>
    </div>
  );
};
DefaultInput.displayName = 'DefaultInput';

export default DefaultInput;
