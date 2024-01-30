import { StoryFn } from "@storybook/react";
import StylizedText from "./index";
import { IStylizedTextProps } from './index';

export default {
  component: StylizedText,
  argTypes: { onClick: { action: 'clicked' } }
} as any;

export const Default: StoryFn<IStylizedTextProps> = (args) => <StylizedText {...args} />;
Default.args = {
  children: "Lorem ipsum dolor sit amet.",
  size: "fontSizeDefault",
  bold: false,
  italic: true,
  color: 'textColorWhite',
  onClick: () => {
    console.log("Вызов функции");
  }
};


