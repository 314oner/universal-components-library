// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultRadioButton,
  dark: styles.DefaultRadioButton_darks
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare interface IDefaultRadioButtonProps extends React.HTMLAttributes<any> {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  color?: 'primary' | 'dark';
}

export const DefaultRadioButton: React.FC<IDefaultRadioButtonProps> = ({
  label,
  name,
  value,
  checked = false,
  onChange,
  color,
  className = styles.DefaultRadioButton,
}) => {
  return (
    <label className={twMerge(clsx(variants[color as keyof typeof variants], className))}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="form-radio h-5 w-5 text-[#0B2447] dark:text-white border-2 border-[#0B2447] dark:border-white focus:ring-[#0B2447] dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-2 bg-white dark:bg-gray-700 transition-all duration-300"
      />
      <span className="ml-2 text-sm font-medium text-[#0B2447] dark:text-white">{label}</span>
    </label>
  );
};

DefaultRadioButton.displayName = 'DefaultRadioButton';

export default DefaultRadioButton;
