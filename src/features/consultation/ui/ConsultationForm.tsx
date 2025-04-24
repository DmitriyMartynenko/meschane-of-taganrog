'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '@/shared/ui/common/Form';
import { OrderForm } from '@/shared/ui/elements/OrderForm';

const FormSchema = z.object({
  phone: z.string().min(11, {
    message: 'Phone number must be at least 11 characters.',
  }),
});
type FormValues = {
  phone: string
}
export const ConsultationForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: '',
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log('Data', data);
  };

  return (
    <Form {...form}>
      <OrderForm<FormValues>
        onSubmit={form.handleSubmit(onSubmit)}
        htmlFor="consultation-phone"
        control={form.control}
        name="phone"
        inputPlaceholder="+7 (___) ___ __ __"
        buttonText="Заказать звонок"
      >
        Нужна консультация?
      </OrderForm>
    </Form>
  );
};
