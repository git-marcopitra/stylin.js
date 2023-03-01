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

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Default',
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  variant: 'text',
  children: 'Default',
  hover: {
    bg: 'text',
    color: 'textInverted',
  },
};

export const ShadowDisabled = Template.bind({});
ShadowDisabled.args = {
  children: 'Default',
  shadowDisabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Button',
};

export const Custom = Template.bind({});
Custom.args = {
  px: 'XXL',
  size: 'sm',
  border: 'none',
  cursor: 'help',
  fontWeight: '700',
  variant: 'custom',
  children: 'Button',
  color: 'textInverted',
  transition: 'all 300ms ease-in-out',
  backgroundImage:
    'radial-gradient(50% 365.89% at 39.33% 50%, #DE00F1 0%, #FF3535 100%)',
  'on-hover': {
    backgroundImage:
      'radial-gradient(50% 150% at 39.33% 50%, #DE00F1 0%, #FF3535 100%)',
  },
};
