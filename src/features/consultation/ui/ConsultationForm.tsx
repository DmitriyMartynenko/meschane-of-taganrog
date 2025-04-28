'use client';

import { z } from 'zod';

import { OrderForm } from '@/shared/ui/elements/OrderForm';
import { OrderSchema } from '@/shared/lib/schemas/order.schema';

type ConsultationForm = z.infer<typeof OrderSchema>;

export const ConsultationForm = () => {
  const onSubmit = (data: ConsultationForm) => {
    alert('ConsultationForm data submitted!')
  };

  return (
    <OrderForm buttonText="Заказать звонок" onSubmit={onSubmit} id="consultation">
      Нужна консультация?
    </OrderForm>
  );
};
