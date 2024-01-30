import React, { MouseEventHandler } from 'react';

export interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
  style: {};
}

export const ErrorCloseIcon = React.forwardRef<HTMLDivElement, Props>(
  ({ onClick, ...props }, ref) => {
    return (
      <div
        onClick={onClick}
        ref={ref}
        {...props}>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m11.725 14.388-4.528 4.426-2.56-2.62 4.529-4.425-4.244-4.342 2.34-2.286 4.243 4.342L16.01 5.08l2.56 2.62-4.505 4.402 4.243 4.341-2.34 2.287-4.243-4.342Z" fill="#fff" /></svg>
      </div>
    )
  }
);

ErrorCloseIcon.displayName = 'ErrorCloseIcon';

export default ErrorCloseIcon;
