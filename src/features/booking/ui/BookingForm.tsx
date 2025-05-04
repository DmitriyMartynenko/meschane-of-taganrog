'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { OrderForm } from '@/shared/ui';

import { BookingFormSchema } from '../model/schemas';

type BookingForm = z.infer<typeof BookingFormSchema>;

export const BookingForm = () => {
  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: BookingForm) => {
    alert(`BookingForm data submitted! ${data}`);
  };

  return (
    <OrderForm
      form={form}
      name="phone"
      label="Записаться на экскурсию"
      buttonText="Заказать экскурсию"
      onSubmit={onSubmit}
    />
  );
};
