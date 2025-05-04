'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { OrderForm } from '@/shared/ui';

import { ConsultationFormSchema } from '../model/schemas';

type ConsultationForm = z.infer<typeof ConsultationFormSchema>;

export const ConsultationForm = () => {
  const form = useForm<ConsultationForm>({
    resolver: zodResolver(ConsultationFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: ConsultationForm) => {
    alert(`ConsultationForm data submitted! ${data}`);
  };

  return (
    <OrderForm
      form={form}
      name="phone"
      label="Нужна консультация?"
      buttonText="Заказать звонок"
      onSubmit={onSubmit}
    />
  );
};
