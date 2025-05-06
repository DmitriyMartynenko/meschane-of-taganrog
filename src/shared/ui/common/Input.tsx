import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils/cn';

export const inputVariants = cva(
  'p-4 bg-background-primary font-semibold text-foreground-primary placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring focus-visible:ring-ring-primary disabled:cursor-not-allowed data-[error=true]:border-destructive-primary data-[error=true]:focus-visible:ring-destructive-primary',
  {
    variants: {
      variant: {
        primary: 'data-[error=true]:border',
        secondary: 'border border-border-primary',
      },
    },
  }
);

type InputProps = {} & ComponentProps<'input'> & VariantProps<typeof inputVariants>;

export const Input = (props: InputProps) => {
  const { className, variant = 'primary', ...restProps } = props;

  return (
    <input data-slot="input" className={cn(inputVariants({ variant, className }))} {...restProps} />
  );
};
