import React from 'react';

import { Button } from '.';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    bg: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  py: 'M',
  px: 'L',
  bg: 'accent',
  border: 'none',
  borderRadius: 'S',
  fontWeight: 'bold',
  children: 'Button',
  color: 'foreground',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
