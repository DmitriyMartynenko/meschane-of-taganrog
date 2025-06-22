import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils/cn';

export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center font-semibold uppercase transition-[background-color] duration-300 ease-in-out focus-visible:ring focus-visible:ring-ring-primary focus-visible:outline-none enabled:hover:bg-accent-primary enabled:active:border-transparent enabled:active:bg-accent-primary/80 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-secondary',
        outline: 'border border-primary bg-transparent',
        ghost: '',
        destructive:
          'bg-destructive-primary focus-visible:ring-destructive-primary enabled:hover:bg-destructive-primary/80',
      },
      size: {
        default: 'px-2 py-4',
        sm: 'px-1.5 py-3 text-xs',
        icon: 'size-12 p-0',
      },
      textWhite: {
        true: 'text-foreground-secondary',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      textWhite: false,
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export const Button = (props: ButtonProps) => {
  const { className, variant, size, textWhite, asChild = false, ...restProps } = props;

  const ButtonPrimitive = asChild ? Slot : 'button';

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, textWhite, className }))}
      {...restProps}
    />
  );
};
