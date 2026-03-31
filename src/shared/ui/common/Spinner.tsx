import { ComponentProps } from 'react';

import { cn } from '@/shared/lib';

export const Spinner = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn(
        'size-8 animate-spin rounded-full border-2 border-secondary/20 border-t-secondary',
        className
      )}
      aria-label="Loading"
      role="status"
      {...restProps}
    />
  );
};
