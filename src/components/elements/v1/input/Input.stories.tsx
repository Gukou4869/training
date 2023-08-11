import Input from ".";

import type { InputProps } from ".";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  component: Input,
  title: "Components/Input",
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "password",
  type: "password",
};
Default.storyName = "Input";
