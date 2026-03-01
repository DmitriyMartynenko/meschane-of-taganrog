'use client';

import { useId } from 'react';
import {
  type FieldValues,
  type Path,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib';

import {
  Button,
  buttonVariants,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  inputVariants,
} from '../common';

import { PhoneInput } from './PhoneInput';

export type InlineFormControls = {
  className?: string;
  label?: string;
  inputType?: 'phone' | 'email';
  inputPlaceholder?: string;
  inputBorder?: VariantProps<typeof inputVariants>['bordered'];
  buttonText?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>['variant'];
  buttonLightText?: boolean;
};

type InlineFormProps<T extends FieldValues> = InlineFormControls & {
  form: UseFormReturn<T>;
  name: Path<T>;
  onSubmit: SubmitHandler<T>;
};

export const InlineForm = <T extends FieldValues>(props: InlineFormProps<T>) => {
  const {
    className,
    form,
    name,
    label = '',
    inputType = 'tel',
    inputPlaceholder = '+7 (___) ___ __ __',
    inputBorder = false,
    buttonText = 'Отправить',
    buttonVariant = 'outline',
    buttonLightText = false,
    onSubmit,
  } = props;

  const id = useId();
  const FormInput = inputType === 'tel' ? PhoneInput : Input;

  return (
    <Form {...form}>
      <form className={cn('flex flex-col gap-6', className)} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <>
              {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
              <div className="flex flex-col gap-2 xl:flex-row">
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
                <Button
                  type="submit"
                  className="basis-[45%]"
                  variant={buttonVariant}
                  lightText={buttonLightText}
                >
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
