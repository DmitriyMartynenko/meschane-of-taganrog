'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  PhoneInput,
} from '@/shared/ui';

import { useBookingStore } from '../model/store';
import { BookingFormSchema } from '../model/schemas';

type BookingForm = z.infer<typeof BookingFormSchema>;

export const BookingForm = () => {
  const phone = useBookingStore((state) => state.phone);

  const form = useForm<BookingForm>({
    resolver: zodResolver(BookingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: phone,
      email: '',
    },
  });

  const onSubmit = (data: BookingForm) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="flex flex-col items-center gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input data- variant="secondary" placeholder="Ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput variant="secondary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input variant="secondary" placeholder="Ваш e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="secondary">Отправить</Button>
      </form>
    </Form>
  );
};
