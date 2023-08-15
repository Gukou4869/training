 import Modal from '.';

 import type { ModalProps } from '.';
import type { StoryFn, Meta } from '@storybook/react';

  
  export default {
    component: Modal,
    title: 'Components/Modal',
  } as Meta;
  
  const Template: StoryFn<ModalProps> = (args:ModalProps) => <Modal {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};
  Default.storyName = "Modal"
  