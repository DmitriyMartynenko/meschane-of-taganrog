import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

const Skeleton = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-background-secondary animate-pulse rounded-md', className)}
      {...props}
    />
  );
};

export { Skeleton };
