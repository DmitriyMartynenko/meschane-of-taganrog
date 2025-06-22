'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
    toast.error('В настоящий момент подписка на новости недоступна.');
  };

  return (
    <InlineForm
      className="w-full"
      form={form}
      name="email"
      inputType="email"
      inputBorder={true}
      inputPlaceholder="Ваш e-mail"
      buttonText="Подписаться"
      onSubmit={onSubmit}
    />
  );
};
