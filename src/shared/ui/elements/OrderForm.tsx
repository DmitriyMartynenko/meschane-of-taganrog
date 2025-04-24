import { ComponentProps, ReactNode } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel } from '../common/Form';
import { Button } from '../common/Button';
import { Input } from '../common/Input';

import { cn } from '@/shared/lib/utils/cn';

type OrderFormProps<TFieldValues extends FieldValues> = {
  children: ReactNode;
  className?: string;
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  htmlFor: string;
  inputPlaceholder: string;
  buttonText: string;
} & ComponentProps<'form'>;

export const OrderForm = <TFieldValues extends FieldValues>(
  props: OrderFormProps<TFieldValues>
) => {
  const {
    children,
    className,
    control,
    name,
    htmlFor,
    inputPlaceholder,
    buttonText,
    ...restProps
  } = props;

  return (
    <form className={cn('flex flex-col gap-6', className)} {...restProps}>
      <FormLabel htmlFor={htmlFor}>{children}</FormLabel>
      <div className="flex gap-2 max-w-[500px]">
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="basis-[55%]">
              <FormControl>
                <Input id={htmlFor} placeholder={inputPlaceholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="basis-[45%]" type="submit">
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
