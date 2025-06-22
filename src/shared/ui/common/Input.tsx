import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils/cn';

export const inputVariants = cva(
  'w-full bg-background-primary p-4 text-base font-semibold text-foreground-primary transition-[color,box-shadow] outline-none placeholder:text-foreground-muted focus-visible:border-ring-primary focus-visible:ring-1 focus-visible:ring-ring-primary disabled:cursor-not-allowed data-[error=true]:border-destructive-primary data-[error=true]:focus-visible:ring-destructive-primary',
  {
    variants: {
      bordered: {
        true: 'border border-border-primary',
        false: 'data-[error=true]:border',
      },
    },
    defaultVariants: {
      bordered: true,
    },
  }
);

type InputProps = {} & ComponentProps<'input'> & VariantProps<typeof inputVariants>;

export const Input = (props: InputProps) => {
  const { className, bordered, ...restProps } = props;

  return (
    <input
      data-slot="input"
      className={cn(inputVariants({ bordered, className }))}
      {...restProps}
    />
  );
};
