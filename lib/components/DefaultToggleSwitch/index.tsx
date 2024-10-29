/* eslint-disable @typescript-eslint/ban-ts-comment */

import clsx from 'clsx';
import React, { forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';
const variants = {
  primary: styles.DefaultToggleSwitch,
  small: 'h-7 w-14 min-w-14',
  medium: 'h-14 w-28 min-w-28',
  large: 'h-28 w-56 min-w-56',
  green: 'bg-emerald-100 text-emerald-800 border-emerald-800',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-800',
  red: 'bg-red-100 text-red-800 border-red-800',
  blue: 'bg-blue-100 text-blue-800 border-blue-800',
} as const;

//@ts-ignore
export declare interface IDefaultToggleSwitchProps extends React.HTMLAttributes<never> {
  base?: 'primary';
  size?: 'small' | 'medium' | 'large';
  color?: 'green' | 'yellow' | 'red' | 'blue';
  initialChecked?: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
}
export const DefaultToggleSwitch = forwardRef<HTMLInputElement, IDefaultToggleSwitchProps>(
  (
    {
      initialChecked = false,
      className = styles.DefaultToggleSwitch,
      color = 'success',
      label,
      size = 'small',
      onChange,
      base = 'primary',
    },
    ref,
  ) => {
    const [checked, setChecked] = useState(initialChecked);
    const handleChange = (): void => {
      const newChecked = !checked;
      setChecked(newChecked);
      if (onChange) onChange(newChecked);
    };
    const toggle = (): void => onChange(!checked);
    const handleClick = (): void => {
      toggle();
    };
    const labelStyle = `ml-3 text-sm font-medium text-[#0B2447] dark:text-white`;
    const switchOuterStyle = `w-14 h-7 bg-white dark:bg-gray-700 border-2 border-[#0B2447] dark:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0B2447]/50 dark:peer-focus:ring-white/50 rounded-full peer transition-all duration-300 ${checked ? 'shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff]' : ''}`;
    const switchInnerStyle = `absolute top-1 left-1 bg-[#0B2447] dark:bg-white rounded-full ${size !== 'small' ? (size !== 'medium' ? 'h-24 w-24' : 'h-12 w-12') : 'h-5 w-5'} transition-all duration-300 ${checked ? (size !== 'small' ? (size !== 'medium' ? 'translate-x-28' : 'translate-x-14') : 'translate-x-7 ') : ''}`;
    return (
      <>
        <label className={twMerge(clsx(variants[base as keyof typeof variants]))}>
          <input
            type="checkbox"
            ref={ref}
            className="sr-only peer"
            checked={checked}
            onClick={handleClick}
            onChange={handleChange}
          />
          <div
            className={twMerge(
              switchOuterStyle,
              clsx(
                variants[size as keyof typeof variants],
                variants[color as keyof typeof variants],
              ),
              className,
            )}
          >
            <div className={switchInnerStyle}></div>
          </div>
          <span className={labelStyle}>{label}</span>
        </label>
      </>
    );
  },
);

DefaultToggleSwitch.displayName = 'DefaultToggleSwitch';

export default DefaultToggleSwitch;
