import { StoryFn } from '@storybook/react';
import { DefaultAccordion, IDefaultAccordionProps } from './index';

export default {
  component: DefaultAccordion,
};

export const Default: StoryFn<IDefaultAccordionProps> = (args) => <DefaultAccordion {...args} />;
Default.args = {
  items: [{ title: 'AccordionTitle1', content: 'AccordionContent1' }],
};
