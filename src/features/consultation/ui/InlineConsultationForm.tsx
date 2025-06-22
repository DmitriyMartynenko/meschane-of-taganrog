'use client';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import { InlineForm } from '@/shared/ui';

import { InlineConsultationFormSchema } from '../model/schemas';

type InlineConsultationForm = z.infer<typeof InlineConsultationFormSchema>;

export const InlineConsultationForm = () => {
  const form = useForm<InlineConsultationForm>({
    resolver: zodResolver(InlineConsultationFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = () => {
    toast.error('В настоящий момент консультация недоступна.');
  };

  return (
    <InlineForm
      form={form}
      name="phone"
      label="Нужна консультация?"
      buttonText="Заказать звонок"
      buttonTextWhite
      onSubmit={onSubmit}
    />
  );
};
