/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
  small: 'h-8 w-14 min-w-14',
  medium: 'h-14 w-28 min-w-28',
  large: 'h-28 w-56 min-w-56',
  green: 'bg-emerald-100 text-emerald-800 border-emerald-800',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-800',
  red: 'bg-red-100 text-red-800 border-red-800',
  blue: 'bg-blue-100 text-blue-800 border-blue-800',
} as const;

//@ts-ignore
export declare interface IUncontrolledToggleSwitchProps extends React.HTMLAttributes<never> {
  base?: 'primary';
  size?: 'small' | 'medium' | 'large';
  color?: 'green' | 'yellow' | 'red' | 'blue';
  onChange?: (checked: boolean) => void;
  checked?: boolean;
  label?: string;
}
export const UncontrolledToggleSwitch: React.FC<IUncontrolledToggleSwitchProps> = ({
  className,
  color = 'green',
  size = 'small',
  checked,
  onChange,
  label,
}) => {
  const renderLabelStyle = `ml-3 text-sm font-medium text-[#0B2447] dark:text-white`;
  const renderOuterStyle = `w-14 h-7 bg-white dark:bg-gray-700 border-2 border-[#0B2447] dark:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0B2447]/50 dark:peer-focus:ring-white/50 rounded-full peer transition-all duration-300 ${checked ? 'shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff]' : ''}`;
  const renderInnerStyle = `!absolute !top-1 !left-1 !bg-green-700 dark:bg-white rounded-full ${size !== 'small' ? (size !== 'medium' ? 'h-24 w-24' : 'h-12 w-12') : 'h-5 w-5'} transition-all duration-300 ${checked ? (size !== 'small' ? (size !== 'medium' ? 'translate-x-28' : 'translate-x-14') : 'translate-x-7 ') : ''}`;
  const renderLabelStyles = twMerge(`
    ${renderLabelStyle}
    ${className && ''}
  `);
  const renderOuterStyles = twMerge(`
    ${renderOuterStyle}
    ${clsx(variants[size as keyof typeof variants], variants[color as keyof typeof variants])}
    ${className ?? ''}
  `);
  const renderInnerStyles = twMerge(`
    ${renderInnerStyle}
    ${className && ''}
  `);
  return (
    <label
      htmlFor={`uncontrolledToggleSwitchId`}
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        id={`uncontrolledToggleSwitchId`}
        checked={checked}
        className="sr-only peer"
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      <div className={renderOuterStyles}>
        <div className={renderInnerStyles}></div>
      </div>
      <span className={renderLabelStyles}>{label}</span>
    </label>
  );
};
UncontrolledToggleSwitch.displayName = 'UncontrolledToggleSwitch';

export default UncontrolledToggleSwitch;
