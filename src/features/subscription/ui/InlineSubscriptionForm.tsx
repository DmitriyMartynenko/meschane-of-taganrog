'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { InlineForm } from '@/shared/ui';

import { InlineSubscriptionFormSchema } from '../model/schemas';

type InlineSubscriptionForm = z.infer<typeof InlineSubscriptionFormSchema>;

export const InlineSubscriptionForm = () => {
  const form = useForm<InlineSubscriptionForm>({
    resolver: zodResolver(InlineSubscriptionFormSchema),
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
    <InlineForm
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
