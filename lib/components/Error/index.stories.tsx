import { StoryFn } from "@storybook/react";
import Error from "./index";
import { Props } from './index';


export default {
    component: Error,
} as any;

export const Default: StoryFn<Props> = (args) => <Error {...args} />;
Default.args = {
    children: "TypeError: Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos!"
};


