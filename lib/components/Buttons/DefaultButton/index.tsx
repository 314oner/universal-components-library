import { MouseEventHandler } from 'react'
import styles from './index.module.css'
import React from 'react'
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export declare interface IDefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: MouseEventHandler<HTMLElement>
  success?: boolean
  typical?: boolean
  size?: string
}

export const DefaultButton = React.forwardRef<HTMLButtonElement, IDefaultButtonProps>(
  ({ success = true, typical = false, onClick, className = styles.button, ...rest }, ref) => {
    const isTypical = typical ? (success ? `border-[#9FB8AB]` : `border-[#E996B0]`) : `border-[#4B4B4B]`
    return (
      <button
        ref={ref}
        className={twMerge(clsx(className, isTypical))}
        {...rest}
      />
    )
  }
);

DefaultButton.displayName = 'DefaultButton';

export default DefaultButton;