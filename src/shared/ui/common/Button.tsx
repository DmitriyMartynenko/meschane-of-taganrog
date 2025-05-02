import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '../../lib/utils/cn';

export const buttonVariants = cva(
  'inline-flex justify-center items-center px-2 py-4 border border-primary bg-transparent font-semibold uppercase transition-[background-color] duration-300 ease-in-out cursor-pointer hover:bg-accent-primary active:border-transparent active:bg-accent-primary/80 disabled:border-foreground-muted/50 disabled:text-foreground-muted disabled:pointer-events-none focus-visible:outline-none focus-visible:ring focus-visible:ring-ring-primary',
  {
    variants: {
      variant: {
        primary: 'text-foreground-secondary',
        secondary: 'text-foreground-primary',
        icon: 'w-12 h-12 p-0 border-none bg-secondary text-foreground-secondary disabled:bg-foreground-muted/50',
      },
    },
  }
);

type ButtonProps = {
  asChild?: boolean;
} & ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export const Button = (props: ButtonProps) => {
  const { className, variant = 'primary', asChild = false, ...restProps } = props;

  const ButtonPrimitive = asChild ? Slot : 'button';

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...restProps}
    />
  );
};
