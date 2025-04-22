import { ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/lib/utils/cn';

const buttonVariants = cva(
  'px-2 py-4 border bg-transparent font-semibold uppercase transition-[background-color] duration-300 ease-in-out cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'border-primary text-foreground-secondary hover:bg-accent-primary active:border-transparent active:bg-accent-primary/80',
        disabled: 'border-foreground-muted/50 text-foreground-muted',
      },
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', asChild = false, ...restProps } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...restProps}
    />
  );
};

export { Button, buttonVariants };
