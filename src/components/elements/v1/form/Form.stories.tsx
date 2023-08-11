import Form from ".";

import type { FormProps } from ".";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  component: Form,
  title: "Components/Form",
} as Meta;

const Template: StoryFn<FormProps> = (args: FormProps) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Form";
