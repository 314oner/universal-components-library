import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultTooltip,
  dark: styles.DefaultTooltip_dark,
} as const;

export declare interface IDefaultTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color?: 'primary';
}

export const DefaultTooltip: React.FC<IDefaultTooltipProps> = ({
  text,
  children,
  color = 'primary',
  className = styles.DefaultTooltip,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={twMerge(clsx(variants[color as keyof typeof variants], className))}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-[#0B2447] rounded-md shadow-[3px_3px_0px_0px_#0B2447] transition-all duration-300">
          {text}
        </div>
      )}{' '}
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-[#0B2447] rounded-md shadow-[3px_3px_0px_0px_#0B2447] transition-all duration-300">
          {text}
        </div>
      )}
    </div>
  );
};

DefaultTooltip.displayName = 'DefaultTooltip';

export default DefaultTooltip;
