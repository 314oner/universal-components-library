import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultAccordion,
  small: 'w-1/3',
  medium: 'w-min',
  large: 'w-full',
} as const;

export declare interface IDefaultAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { title: string; content: string }[];
  color?: 'primary';
  size?: 'small' | 'medium' | 'large';
}
export const DefaultAccordion: React.FC<IDefaultAccordionProps> = ({
  items,
  size,
  color = 'primary',
  className = styles.DefaultAccordion,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-[#0B2447] dark:border-white rounded-lg overflow-hidden transition-all duration-300"
        >
          <button
            className="flex justify-between items-center w-full px-4 py-3 font-medium text-left bg-white dark:bg-gray-800 hover:bg-[#0B2447]/10 dark:hover:bg-white/10 focus:outline-none"
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-white dark:bg-gray-800 border-t-2 border-[#0B2447] dark:border-white">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

DefaultAccordion.displayName = 'DefaultAccordion';

export default DefaultAccordion;
