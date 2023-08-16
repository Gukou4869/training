import Loading from ".";

import type { StoryFn, Meta } from "@storybook/react";

export default {
  component: Loading,
  title: "Components/Loading",
} as Meta;

const Template: StoryFn = () => <Loading />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Loading";
