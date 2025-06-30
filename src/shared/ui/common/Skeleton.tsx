import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

export const Skeleton = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-md bg-background-secondary', className)}
      {...restProps}
    />
  );
};
