import { type ClassValue, clsx } from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const switchColors = {
  background: {
    default: 'bg-neutral-200 dark:bg-neutral-700',
    hover: 'hover:bg-neutral-300 dark:hover:bg-neutral-600',
    checked:
      'has-[input[type=checkbox]:checked]:bg-neutral-700 dark:has-[input[type=checkbox]:checked]:bg-neutral-300',
    checkedHover:
      'has-[input[type=checkbox]:checked]:hover:bg-black dark:has-[input[type=checkbox]:checked]:hover:bg-white',
    disabled:
      'has-[input[type=checkbox]:disabled]:bg-neutral-100 dark:has-[input[type=checkbox]:disabled]:bg-neutral-800',
    disabledHover:
      'has-[input[type=checkbox]:disabled]:hover:bg-neutral-100 dark:has-[input[type=checkbox]:disabled]:hover:bg-neutral-800',
    disabledChecked:
      'has-[input[type=checkbox]:disabled:checked]:bg-neutral-300 dark:has-[input[type=checkbox]:disabled:checked]:bg-neutral-700',
    disabledCheckedHover:
      'has-[input[type=checkbox]:disabled:checked]:hover:bg-neutral-300 dark:has-[input[type=checkbox]:disabled:checked]:hover:bg-neutral-700',
  },
  button: {
    default: 'bg-white dark:bg-black',
  },
};

export interface IPrimeToggleButtonProps extends React.AllHTMLAttributes<HTMLInputElement> {}

export const PrimeToggleButton = React.forwardRef<HTMLInputElement, IPrimeToggleButtonProps>(
  (
    { className, type = 'checkbox', defaultChecked, onChange, checked: propChecked, ...props },
    ref,
  ) => {
    const [checked, setChecked] = React.useState(defaultChecked ?? false);
    React.useEffect(() => {
      if (typeof propChecked === 'boolean') {
        setChecked(propChecked);
      }
    }, [propChecked]);
    const internalRef = React.useRef<HTMLInputElement | null>(null);
    return (
      <label
        htmlFor={`primeToggleButtonId`}
        className={cn(
          `relative inline-block group/switch rounded-full p-1 has-[input[type=checkbox]:not(:checked)]:pr-5 has-[input[type=checkbox]:checked]:pl-5 ${switchColors.background.default} ${switchColors.background.hover} ${switchColors.background.checked} ${switchColors.background.checkedHover} ${switchColors.background.disabled} ${switchColors.background.disabledHover} ${switchColors.background.disabledChecked} ${switchColors.background.disabledCheckedHover} has-[input[type=checkbox]:disabled]:cursor-not-allowed transition-all duration-200 ease-in-out`,
          className,
        )}
      >
        <input
          id={`primeToggleButtonId`}
          defaultChecked={defaultChecked}
          checked={typeof defaultChecked === 'boolean' ? undefined : checked}
          type={type}
          className="hidden"
          onChange={(e) => {
            setChecked(e.currentTarget.checked);
            onChange?.(e);
          }}
          ref={(el) => {
            internalRef.current = el;
            if (typeof ref === 'function') {
              ref(el);
            } else if (ref) {
              ref.current = el;
            }
          }}
          {...props}
        />
        {/*<div className={`w-4 h-4 rounded-full ${switchColors.button.default}`} />*/}
        <div className={cn(
          `w-4 h-4 rounded-full bg-white dark:bg-black`,
          className,
        )}
        />
      </label>
    );
  },
);

PrimeToggleButton.displayName = 'UncontrolledToggleSwitch';

export default PrimeToggleButton;
