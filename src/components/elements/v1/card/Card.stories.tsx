import Card from ".";

import type { CardProps } from ".";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  component: Card,
  title: "Components/Card",
} as Meta;

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Card";
