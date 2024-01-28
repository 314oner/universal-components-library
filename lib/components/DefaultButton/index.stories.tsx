import { StoryFn } from "@storybook/react";
import { DefaultButton } from "./index";
import { IDefaultButtonProps } from './index';

export default {
    component: DefaultButton,
} as any;

export const Default: StoryFn<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Default.args = {
    children: 'Click me',
    success: true,
    typical: false,
    onClick: () => { }
};

export const Success: StoryFn<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Success.args = {
    children: 'Click me',
    success: true,
    typical: true,
    onClick: () => { }
};

export const Interrupt: StoryFn<IDefaultButtonProps> = (args) => <DefaultButton {...args} />;
Interrupt.args = {
    children: 'Click me',
    success: false,
    typical: true,
    onClick: () => { }
};


