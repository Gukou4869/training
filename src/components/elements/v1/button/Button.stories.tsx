import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Button";
