import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultModal,
  dark: styles.DefaultModal_dark,
} as const;

export declare interface IDefaultModalProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  color?: 'primary' | 'dark';
}

export const DefaultModal: React.FC<IDefaultModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  color = 'primary',
  className = styles.DefaultModal,
}) => {
  if (!isOpen) return null;
  return (
    <div
      className={twMerge(
        clsx(variants[color as keyof typeof variants], className),
      )}
      id="my-modal"
    >
      <div className="relative p-5 mx-auto bg-white border rounded-lg shadow-lg top-20 w-96 dark:bg-gray-700">
        <div className="mt-3">
          <h3 className="mb-4 text-lg font-medium">{title}</h3>
          <div className="py-3 mt-2 px-7">{children}</div>
          <div className="items-center px-4 py-3">
            <button
              className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-[#0B2447] dark:border-white rounded-md shadow-[5px_5px_0px_0px_#0B2447] dark:shadow-[5px_5px_0px_0px_#ffffff] transition-all duration-300 hover:shadow-none"
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultModal.displayName = 'DefaultModal';

export default DefaultModal;
