'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { OrderForm } from '@/shared/ui';

import { SubscriptionFormSchema } from '../model/schemas';

type SubscriptionForm = z.infer<typeof SubscriptionFormSchema>;

export const SubscriptionForm = () => {
  const form = useForm<SubscriptionForm>({
    resolver: zodResolver(SubscriptionFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = () => {
    alert('SubscriptionForm data submitted!');
  };

  return (
    <OrderForm
      className="w-full"
      form={form}
      name="email"
      type="email"
      inputVariant="secondary"
      placeholder="Ваш e-mail"
      buttonText="Подписаться"
      buttonVariant="secondary"
      onSubmit={onSubmit}
    />
  );
};
