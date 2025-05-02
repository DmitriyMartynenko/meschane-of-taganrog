'use client';

import { z } from 'zod';

import { OrderSchema } from '@/shared/model';
import { OrderForm } from '@/shared/ui';

type BookingForm = z.infer<typeof OrderSchema>;

export const BookingForm = () => {
  const onSubmit = (data: BookingForm) => {
    alert('BookingForm data submitted!');
  };

  return (
    <OrderForm buttonText="Заказать экскурсию" onSubmit={onSubmit} id="booking">
      Записаться на экскурсию
    </OrderForm>
  );
};
