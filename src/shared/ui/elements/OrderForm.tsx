'use client';

import { useId } from 'react';
import {
  type Path,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';
import { type VariantProps } from 'class-variance-authority';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../common/Form';
import { Button, buttonVariants } from '../common/Button';
import { Input, inputVariants } from '../common/Input';

import { PhoneInput } from './PhoneInput';

import { cn } from '../../lib/utils/cn';

type OrderFormProps<T extends FieldValues> = {
  className?: string;
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  type?: 'phone' | 'email';
  placeholder?: string;
  buttonText?: string;
  inputVariant?: VariantProps<typeof inputVariants>['variant'];
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
  onSubmit: SubmitHandler<T>;
};

export const OrderForm = <T extends FieldValues>(props: OrderFormProps<T>) => {
  const {
    className = '',
    form,
    name,
    label = '',
    type = 'phone',
    placeholder = '+7 (___) ___ __ __',
    buttonText = 'Отправить',
    inputVariant = 'primary',
    buttonVariant = 'primary',
    onSubmit,
  } = props;

  const id = useId();
  const FormInput = type === 'phone' ? PhoneInput : Input;

  return (
    <Form {...form}>
      <form
        className={cn('flex flex-col gap-6 w-[505px]', className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <>
              {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
              {console.log('field:', field)}
              <div className="flex gap-2">
                <FormItem className="basis-[55%]">
                  <FormControl>
                    <FormInput
                      type={type}
                      variant={inputVariant}
                      placeholder={placeholder}
                      id={id}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <Button className="basis-[45%]" type="submit" variant={buttonVariant}>
                  {buttonText}
                </Button>
              </div>
              <FormMessage />
            </>
          )}
        />
      </form>
    </Form>
  );
};
