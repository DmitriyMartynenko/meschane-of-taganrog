'use client';

import { z } from 'zod';

import { OrderSchema } from '@/shared/model';
import { OrderForm } from '@/shared/ui';

type ConsultationForm = z.infer<typeof OrderSchema>;

export const ConsultationForm = () => {
  const onSubmit = (data: ConsultationForm) => {
    alert('ConsultationForm data submitted!');
  };

  return (
    <OrderForm buttonText="Заказать звонок" onSubmit={onSubmit} id="consultation">
      Нужна консультация?
    </OrderForm>
  );
};
