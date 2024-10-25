/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultRadioButton,
  dark: styles.DefaultRadioButton_darks,
} as const;
//@ts-ignore
export declare interface IDefaultRadioButtonProps extends React.HTMLAttributes<any> {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  color?: 'primary' | 'dark';
}

export const DefaultRadioButton: React.FC<IDefaultRadioButtonProps> = ({
  label,
  name,
  value,
  onChange,
  checked = false,
  color = 'primary',
  className = styles.DefaultRadioButton,
  ...rest
}) => {
  const inputStyles =
    'form-radio h-5 w-5 border-2 border-[#0B2447] dark:border-white focus:ring-[#0B2447] dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-2 bg-white dark:bg-gray-700 transition-all duration-300';
  const labelStyles = 'ml-2 text-sm font-medium';
  return (
    <label className={twMerge(clsx(variants[color as keyof typeof variants], className))}>
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={twMerge(inputStyles, className)}
        {...rest}
      />
      <span className={twMerge(labelStyles, className)}>{label}</span>
    </label>
  );
};

DefaultRadioButton.displayName = 'DefaultRadioButton';

export default DefaultRadioButton;
