import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

export const Input = (props: ComponentProps<'input'>) => {
  const { className, ...restProps } = props;

  return (
    <input
      data-slot="input"
      className={cn(
        'p-4 bg-background-primary font-semibold text-foreground-primary placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring focus-visible:ring-ring-primary',
        className
      )}
      {...restProps}
    />
  );
};
