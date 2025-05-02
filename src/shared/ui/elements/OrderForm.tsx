'use client'

import { type ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { OrderSchema } from '../../model/schemas';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../common/Form';
import { Button } from '../common/Button';
import { PhoneInput } from './PhoneInput';

import { cn } from '../../lib/utils/cn';

type OrderForm = z.infer<typeof OrderSchema>;

type OrderFormProps = {
  children: ReactNode;
  className?: string;
  onSubmit: SubmitHandler<OrderForm>;
  buttonText: string;
  id: string;
};

export const OrderForm = (props: OrderFormProps) => {
  const { children: title, className, onSubmit, buttonText, id } = props;

  const form = useForm<OrderForm>({
    resolver: zodResolver(OrderSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      phone: '',
    },
  });

  return (
    <Form {...form}>
      <form className={cn('max-w-[505px]', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <div className="flex flex-col gap-6">
              <FormLabel htmlFor={id}>{title}</FormLabel>
              <div className="flex gap-2">
                <FormItem className="basis-[55%]">
                  <FormControl>
                    <PhoneInput id={id} placeholder="+7 (___) ___ __ __" {...field} />
                  </FormControl>
                </FormItem>
                <Button className="basis-[45%]" type="submit">
                  {buttonText}
                </Button>
              </div>
              <FormMessage />
            </div>
          )}
        />
      </form>
    </Form>
  );
};
