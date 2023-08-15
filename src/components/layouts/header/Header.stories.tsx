 import Header from '.';

 import type { HeaderProps } from '.';
import type { StoryFn, Meta } from '@storybook/react';

  
  export default {
    component: Header,
    title: 'Components/Header',
  } as Meta;
  
  const Template: StoryFn<HeaderProps> = (args:HeaderProps) => <Header {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {};
  Default.storyName = "Header"
  