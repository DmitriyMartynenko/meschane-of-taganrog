import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

const Input = (props: ComponentProps<'input'>) => {
  const { className, type, ...restProps } = props;

  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        'p-4 bg-background-primary font-semibold text-foreground-primary placeholder:text-foreground-muted focus:outline-none focus:ring-1 focus:ring-accent-primary',
        className
      )}
      {...restProps}
    />
  );
};

export { Input };
