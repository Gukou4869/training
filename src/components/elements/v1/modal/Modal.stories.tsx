import { Modal } from ".";

import type { ModalComponentProps } from "./types";
import type { StoryFn, Meta } from "@storybook/react";

export default {
  component: Modal,
  title: "Components/Modal",
} as Meta;

const Template: StoryFn<ModalComponentProps> = (args: ModalComponentProps) => (
  <Modal {...args}>
    <div className="">test Modal</div>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {};
Default.storyName = "Modal";
