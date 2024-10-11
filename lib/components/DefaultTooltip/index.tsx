// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultTooltip,
  dark: styles.DefaultTooltip_dark,
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare interface IDefaultTooltipProps extends React.HTMLAttributes<any> {
  text: string;
  onRemove: () => void;
  color?: 'primary' | 'dark';
}

export const DefaultTooltip: React.FC<IDefaultTooltipProps> = ({
  text,
  children,
  color,
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
      )}
    </div>
  );
};

DefaultTooltip.displayName = 'DefaultTooltip';

export default DefaultTooltip;
