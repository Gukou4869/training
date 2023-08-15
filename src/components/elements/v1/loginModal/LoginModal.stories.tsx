 import LoginModal from '.';

 import type { LoginModalProps } from '.';
import type { StoryFn, Meta } from '@storybook/react';

  
  export default {
    component: LoginModal,
    title: 'Components/LoginModal',
  } as Meta;
  
  const Template: StoryFn<LoginModalProps> = (args:LoginModalProps) => <LoginModal {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};
  Default.storyName = "LoginModal"
  