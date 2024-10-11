import { StoryFn } from '@storybook/react';
import { DefaultInput, IDefaultInputProps } from './index';

export default {
  component: DefaultInput,
};

export const Default: StoryFn<IDefaultInputProps> = (args) => <DefaultInput {...args} />;
Default.args = {
  label: 'DefaultInput label text',
  error: '',
  icon: (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 12H5m14 0-4 4m4-4-4-4"
      />
    </svg>
  ),
};
