    import Dashboard from '.';

import type { StoryFn, Meta } from '@storybook/react';

    
    export default {
      component: Dashboard,
      title: 'Pages/Dashboard',
    } as Meta;
    
    const Template: StoryFn = () => <Dashboard />;
    
    export const Default = Template.bind({});
    Default.storyName = "Dashboard"