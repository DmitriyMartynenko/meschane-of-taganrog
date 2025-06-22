'use client';

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

import { useBookingForm } from '../lib/hooks/useBookingForm';

export const BookingForm = () => {
  const { form, onSubmit } = useBookingForm();

  return (
    <Form {...form}>
      <form className="flex flex-col items-center gap-8" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Ваше имя" {...field} />
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
                  <PhoneInput {...field} />
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
                  <Input placeholder="Ваш e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="outline">
          Отправить
        </Button>
      </form>
    </Form>
  );
};
