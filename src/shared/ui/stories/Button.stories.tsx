import { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Button } from '../common';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'icon'],
    },
    lightText: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Заказать экскурсию',
    variant: 'primary',
    size: 'default',
    lightText: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
