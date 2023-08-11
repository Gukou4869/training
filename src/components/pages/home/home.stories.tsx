    import Home from '.';

import type { StoryFn, Meta } from '@storybook/react';

    
    export default {
      component: Home,
      title: 'Pages/Home',
    } as Meta;
    
    const Template: StoryFn = () => <Home />;
    
    export const Default = Template.bind({});
    Default.storyName = "Home"