/* eslint-disable @typescript-eslint/ban-ts-comment */
import clsx from 'clsx';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultDropdown,
  dark: styles.DefaultDropdown_dark,
  small: 'w-32',
  medium: 'w-64',
  large: 'w-96',
} as const;

//@ts-ignore
export declare interface IDefaultDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  onSelect: (option: string) => void;
  placeholder: string;
  color?: 'primary' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultDropdown: React.FC<IDefaultDropdownProps> = ({
  options,
  placeholder = 'Выберите опцию',
  onSelect,
  color = 'primary',
  size,
  className = styles.DefaultDropdown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
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
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border-2 border-[#0B2447] dark:border-white shadow-[3px_3px_0px_0px_#0B2447] dark:shadow-[3px_3px_0px_0px_#ffffff] px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium hover:bg-[#0B2447]/10 dark:hover:bg-white/10 focus:outline-none transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || placeholder}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <a
                key={option}
                href="#"
                className="block px-4 py-2 text-sm hover:bg-[#0B2447]/10 dark:hover:bg-white/10"
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(option);
                }}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DefaultDropdown;
