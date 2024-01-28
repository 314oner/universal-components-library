import { StoryFn } from "@storybook/react";
import { DefaultLongButton } from "./index";
import { IDefaultLongButtonProps } from './index';

export default {
    component: DefaultLongButton,
} as any;

export const Default: StoryFn<IDefaultLongButtonProps> = (args) => <DefaultLongButton {...args} />;
Default.args = {
    children: 'Click me',
    success: true,
    size: "medium",
    onClick: () => { }
};

export const Success: StoryFn<IDefaultLongButtonProps> = (args) => <DefaultLongButton {...args} />;
Success.args = {
    children: 'Click me',
    success: true,
    size: "large",
    onClick: () => { }
};

export const Interrupt: StoryFn<IDefaultLongButtonProps> = (args) => <DefaultLongButton {...args} />;
Interrupt.args = {
    children: 'Click me',
    success: false,
    onClick: () => { }
};


