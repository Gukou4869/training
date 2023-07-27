import React from 'react';
import { Meta, Story } from '@storybook/react';
import Home from './home';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

const Template: Story = () => <Home  />;

export const Home = Template.bind({});