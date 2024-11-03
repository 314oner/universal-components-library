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
const switchSizes = {
  wrapper: {
    default:
      'w-10 min-w-10 has-[input[type=checkbox]:not(:checked)]:pr-5 has-[input[type=checkbox]:checked]:pl-5',
    small:
      'h-10 w-18 min-w-18 has-[input[type=checkbox]:not(:checked)]:pr-12 has-[input[type=checkbox]:checked]:pl-12',
    medium:
      'h-14 w-26 min-w-26 has-[input[type=checkbox]:not(:checked)]:pr-14 has-[input[type=checkbox]:checked]:pl-14',
    large:
      'h-26 w-58 min-w-58 has-[input[type=checkbox]:not(:checked)]:pr-32 has-[input[type=checkbox]:checked]:pl-32',
  },
  button: {
    default: 'w-4 h-4 rounded-full',
    small: 'h-8 w-8 rounded-full',
    medium: 'h-12 w-12 rounded-full',
    large: 'h-24 w-24 rounded-full',
  },
};
export interface IDefaultToggleSwitchProps extends React.AllHTMLAttributes<HTMLInputElement> {}

export const DefaultToggleSwitch = React.forwardRef<HTMLInputElement, IDefaultToggleSwitchProps>(
  (
    {
      className,
      size = 'default',
      type = 'checkbox',
      defaultChecked,
      onChange,
      checked: propChecked,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = React.useState(defaultChecked ?? false);
    React.useEffect(() => {
      if (typeof propChecked === 'boolean') {
        setChecked(propChecked);
      }
    }, [propChecked]);
    const internalRef = React.useRef<HTMLInputElement | null>(null);
    const renderWrapperStyles = `${size === 'default' ? switchSizes.wrapper.default : size !== 'small' ? (size !== 'medium' ? switchSizes.wrapper.large : switchSizes.wrapper.medium) : switchSizes.wrapper.small} relative inline-block group/switch rounded-full p-1 ${switchColors.background.default} ${switchColors.background.hover} ${switchColors.background.checked} ${switchColors.background.checkedHover} ${switchColors.background.disabled} ${switchColors.background.disabledHover} ${switchColors.background.disabledChecked} ${switchColors.background.disabledCheckedHover} has-[input[type=checkbox]:disabled]:cursor-not-allowed transition-all duration-200 ease-in-out`;
    const renderButtonStyles = `${size === 'default' ? switchSizes.button.default : size !== 'small' ? (size !== 'medium' ? switchSizes.button.large : switchSizes.button.medium) : switchSizes.button.small}`;

    return (
      <label
        htmlFor={`defaultToggleSwitchId`}
        className={cn(renderWrapperStyles, className)}
      >
        <input
          id={`defaultToggleSwitchId`}
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
        <div
          className={cn(
            `${switchSizes.button.default}`,
            `${switchColors.button.default}`,
            `${renderButtonStyles}`,
          )}
        />
      </label>
    );
  },
);

DefaultToggleSwitch.displayName = 'DefaultToggleSwitch';

export default DefaultToggleSwitch;
