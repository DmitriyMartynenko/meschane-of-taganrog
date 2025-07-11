'use client';

import { createContext, useContext, useId, type ComponentProps } from 'react';
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils/cn';

import { Label } from './Label';

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);

export const Form = FormProvider;

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>
) => {
  const { name } = props;

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

export const FormItem = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn('grid gap-2', className)} {...restProps} />
    </FormItemContext.Provider>
  );
};

export const FormLabel = (props: ComponentProps<typeof LabelPrimitive.Root>) => {
  const { className, ...restProps } = props;

  const { error, formItemId } = useFormField();

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn(
        'transition-all duration-300 ease-in-out data-[error=true]:font-semibold data-[error=true]:text-destructive-primary',
        className
      )}
      htmlFor={formItemId}
      {...restProps}
    />
  );
};

export const FormControl = (props: ComponentProps<typeof Slot>) => {
  const { ...restProps } = props;

  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      data-error={!!error}
      {...restProps}
    />
  );
};

export const FormDescription = (props: ComponentProps<'p'>) => {
  const { className, ...restProps } = props;

  const { formDescriptionId } = useFormField();

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...restProps}
    />
  );
};

export const FormMessage = (props: ComponentProps<'p'>) => {
  const { children, className, ...restProps } = props;

  const { error, formMessageId } = useFormField();

  const body = error ? String(error?.message ?? '') : children;

  /*
  if (!body) {
    return null;
  }
  */

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn(
        'font-semibold text-destructive-primary transition-opacity duration-300 ease-in-out',
        body ? 'opacity-100' : 'pointer-events-none opacity-0',
        className
      )}
      {...restProps}
    >
      {body}
    </p>
  );
};
