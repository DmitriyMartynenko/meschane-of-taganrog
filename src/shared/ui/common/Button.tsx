import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib';

export const buttonVariants = cva(
  cn(
    'inline-flex cursor-pointer touch-manipulation items-center justify-center border border-transparent font-semibold uppercase outline-none',
    'focus-visible:ring-2 focus-visible:ring-ring-primary',
    'disabled:cursor-not-allowed disabled:opacity-50'
  ),
  {
    variants: {
      variant: {
        primary: cn(
          'bg-primary',
          '[transition:background-color_300ms_ease-in-out]',
          'enabled:hover:bg-accent-primary',
          'enabled:active:[transition:background-color_150ms_ease-out]',
          'enabled:active:bg-accent-primary/80'
        ),
        outline: cn(
          'border-secondary bg-transparent',
          '[transition:background-color_300ms_ease-in-out]',
          'enabled:hover:bg-accent-primary',
          'enabled:active:[transition:background-color_150ms_ease-out]',
          'enabled:active:bg-accent-primary/80',
          'enabled:active:border-transparent'
        ),
        ghost: cn(
          'bg-transparent',
          '[transition:color_300ms_ease-in-out]',
          'enabled:hover:text-accent-primary',
          'enabled:active:[transition:color_150ms_ease-out]',
          'enabled:active:text-accent-primary/80',
          '[@media(hover:none)]:enabled:active:[transition:scale_150ms_ease-out]',
          '[@media(hover:none)]:enabled:active:scale-95'
        ),
        destructive: cn(
          'bg-destructive-primary',
          '[transition:background-color_300ms_ease-in-out]',
          'enabled:hover:bg-destructive-primary/80',
          'enabled:active:[transition:background-color_150ms_ease-out]',
          'enabled:active:bg-destructive-primary/60',
          'focus-visible:ring-destructive-primary'
        ),
      },
      size: {
        default: 'px-6 py-4',
        sm: 'px-5 py-3 text-sm',
      },
      lightText: {
        true: 'text-foreground-secondary',
        false: 'text-foreground-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      lightText: false,
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export const Button = (props: ButtonProps) => {
  const { className, variant, size, lightText, asChild = false, ...restProps } = props;

  const ButtonPrimitive = asChild ? Slot : 'button';

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, lightText, className }))}
      {...restProps}
    />
  );
};
