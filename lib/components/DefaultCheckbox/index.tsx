import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultCheckbox,
  dark: styles.DefaultCheckbox_dark,
  small: 'inline-block',
  medium: 'w-64',
  large: 'w-96',
} as const;

export declare interface IDefaultCheckboxProps {
  prefixCls?: string;
  rootClassName?: string;
  defaultChecked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: unknown;
  tabIndex?: number;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  autoFocus?: boolean;
  skipGroup?: boolean;
  required?: boolean;
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: 'primary' | 'dark';
  size?: 'small' | 'medium' | 'large';
  className: string;
}

export const DefaultCheckbox: React.FC<IDefaultCheckboxProps> = ({
  label,
  checked = false,
  onChange,
  color,
  className = styles.DefaultCheckbox,
}) => {
  return (
    <label className={twMerge(clsx(variants[color as keyof typeof variants], className))}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        className="form-checkbox h-5 w-5 text-[#0B2447] dark:text-white rounded border-2 border-[#0B2447] dark:border-white focus:ring-[#0B2447] dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800 focus:ring-2 bg-white dark:bg-gray-700 transition-all duration-300"
      />
      <span className="ml-2 text-sm font-medium text-[#0B2447] dark:text-white">{label}</span>
    </label>
  );
};

DefaultCheckbox.displayName = 'DefaultCheckbox';

export default DefaultCheckbox;
