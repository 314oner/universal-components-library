// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultTag,
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare interface IDefaultTagProps extends React.HTMLAttributes<any> {
  text: string;
  onRemove?: () => void;
  color?: 'primary';
}

export const DefaultTag: React.FC<IDefaultTagProps> = ({
  text,
  onRemove,
  color = 'primary',
  className = styles.DefaultTag,
  size,
}) => {
  return (
    <div>
      <span
        className={twMerge(
          clsx(variants[color as keyof typeof variants], className),
        )}
      >
        {text}
        <button
          type="button"
          className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-white dark:text-[#0B2447] hover:bg-[#0B2447]/20 dark:hover:bg-white/20 hover:text-[#0B2447] dark:hover:text-white focus:outline-none focus:bg-[#0B2447] dark:focus:bg-white focus:text-white dark:focus:text-[#0B2447] transition-all duration-300"
          onClick={onRemove}
        >
          <span className="sr-only">Remove {text}</span>
          <svg
            className="w-2 h-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

DefaultTag.displayName = 'DefaultTag';

export default DefaultTag;
