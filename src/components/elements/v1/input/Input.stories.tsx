import { StoryFn, Meta } from "@storybook/react";
import Input, { InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "password",
  type: "password",
};
Default.storyName = "Input";
