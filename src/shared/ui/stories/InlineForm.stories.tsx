import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { InlineForm } from '../elements';

type FormValues = {
  contact: string;
};

const meta: Meta<typeof InlineForm> = {
  title: 'shared/InlineForm',
  component: InlineForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', description: 'Текст над полем' },
    inputType: { control: 'radio', options: ['phone', 'email'] },
    inputPlaceholder: { control: 'text' },
    inputBorder: { control: 'boolean' },
    buttonText: { control: 'text' },
    buttonVariant: {
      control: 'radio',
      options: ['primary', 'outline', 'ghost', 'destructive'],
    },
    buttonLightText: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InlineForm>;

const Template = (args: Story['args']) => {
  const form = useForm<FormValues>({
    defaultValues: { contact: '' },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Submitted:', data);
  };

  return <InlineForm {...args} form={form} name="contact" onSubmit={onSubmit} />;
};

export const PhoneForm: Story = {
  render: Template,
  args: {
    label: 'Телефон',
    inputType: 'phone',
    inputPlaceholder: '+7 (___) ___ __ __',
    inputBorder: true,
    buttonText: 'Отправить',
    buttonVariant: 'outline',
    buttonLightText: false,
  },
};

export const EmailForm: Story = {
  render: Template,
  args: {
    label: 'Email',
    inputType: 'email',
    inputPlaceholder: 'example@mail.com',
    inputBorder: true,
    buttonText: 'Подписаться',
    buttonVariant: 'primary',
    buttonLightText: true,
  },
};
