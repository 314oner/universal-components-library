import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultBreadcrumb,
  dark: styles.DefaultBreadcrumb_dark,
} as const;

export declare interface IDefaultBreadcrumbProps
  extends React.HTMLAttributes<HTMLMenuElement> {
  items: { label: string; href?: string }[];
  color?: 'primary' | 'dark';
}

export const DefaultBreadcrumb: React.FC<IDefaultBreadcrumbProps> = ({
  items,
  color = 'primary',
  className = styles.DefaultBreadcrumb,
}) => {
  return (
    <nav
      className={twMerge(
        clsx(variants[color as keyof typeof variants], className),
      )}
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <svg
                className="w-6 h-6 text-[#0B2447] dark:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {index >= items.length - 1 ? (
              <a className="inline-flex items-center text-sm font-medium text-gray-500 transition-colors duration-200 dark:text-gray-700">
                {item.label}
              </a>
            ) : (
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-[#0B2447] dark:text-white hover:text-[#0B2447]/70 dark:hover:text-white/70 transition-colors duration-200"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
DefaultBreadcrumb.displayName = 'DefaultBreadcrumb';

export default DefaultBreadcrumb;
