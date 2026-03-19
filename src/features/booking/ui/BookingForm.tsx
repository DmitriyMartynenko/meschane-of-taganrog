'use client';

import { UseFormReturn } from 'react-hook-form';

import { cn } from '@/shared/lib';
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

import { type BookingFormFields } from '../model/booking-form.types';

export type BookingFormProps = {
  form: UseFormReturn<BookingFormFields>;
  onSubmit: (data: BookingFormFields) => Promise<void>;
  className?: string;
};

export const BookingForm = (props: BookingFormProps) => {
  const { form, onSubmit, className } = props;

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  return (
    <Form {...form}>
      <form
        className={cn('flex flex-col items-center gap-8', className)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4">
          <FormField
            control={control}
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
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
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
        <Button variant="outline" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </Button>
      </form>
    </Form>
  );
};
