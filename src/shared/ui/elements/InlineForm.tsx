'use client';

import { useId } from 'react';
import {
  type FieldValues,
  type Path,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils/cn';

import { Button, buttonVariants } from '../common/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../common/Form';
import { Input, inputVariants } from '../common/Input';

import { PhoneInput } from './PhoneInput';

export type InlineFormControls = {
  className?: string;
  label?: string;
  inputType?: 'phone' | 'email';
  inputPlaceholder?: string;
  inputBorder?: VariantProps<typeof inputVariants>['bordered'];
  buttonText?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
  buttonTextWhite?: boolean;
};

type InlineFormProps<T extends FieldValues> = InlineFormControls & {
  form: UseFormReturn<T>;
  name: Path<T>;
  onSubmit: SubmitHandler<T>;
};

export const InlineForm = <T extends FieldValues>(props: InlineFormProps<T>) => {
  const {
    className = '',
    form,
    name,
    label = '',
    inputType = 'phone',
    inputPlaceholder = '+7 (___) ___ __ __',
    inputBorder = false,
    buttonText = 'Отправить',
    buttonVariant = 'outline',
    buttonTextWhite = false,
    onSubmit,
  } = props;

  const id = useId();
  const FormInput = inputType === 'phone' ? PhoneInput : Input;

  return (
    <Form {...form}>
      <form
        className={cn('flex w-[505px] flex-col gap-6', className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <>
              {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
              <div className="flex gap-2">
                <FormItem className="basis-[55%]">
                  <FormControl>
                    <FormInput
                      type={inputType}
                      bordered={inputBorder}
                      placeholder={inputPlaceholder}
                      id={id}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
                <Button className="basis-[45%]" variant={buttonVariant} textWhite={buttonTextWhite}>
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
