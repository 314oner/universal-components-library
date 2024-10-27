import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.css';

const variants = {
  primary: styles.DefaultCard,
  small: 'w-72',
  medium: 'w-80',
  large: 'w-96',
} as const;

export declare interface IDefaultCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  imageUrl?: string;
  color?: 'primary';
  size?: 'small' | 'medium' | 'large';
}

export const DefaultCard: React.FC<IDefaultCardProps> = ({
  title,
  description,
  imageUrl,
  size,
  color = 'primary',
  className = styles.DefaultCard,
}) => {
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
      {imageUrl && (
        <img className="object-cover w-full h-68" src={imageUrl} alt={title} />
      )}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="mb-3 font-normal">{description}</p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white dark:text-[#0B2447] bg-[#0B2447] dark:bg-white rounded-md hover:bg-[#0B2447]/80 dark:hover:bg-white/80 transition-colors duration-300"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
DefaultCard.displayName = 'DefaultCard';

export default DefaultCard;
