import { StoryFn, Meta } from '@storybook/react';
    import Home from '.';
    
    export default {
      title: 'Pages/Home',
      component: Home,
    } as Meta;
    
    const Template: StoryFn = () => <Home />;
    
    export const Default = Template.bind({});
    Default.storyName = "Home"