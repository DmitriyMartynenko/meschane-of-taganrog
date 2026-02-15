import { ComponentProps } from 'react';
import { Loader } from 'lucide-react';

import { cn } from '@/shared/lib';

export const Spinner = (props: ComponentProps<'svg'>) => {
  const { className, strokeWidth = 2, ...restProps } = props;

  return (
    <Loader
      role="status"
      strokeWidth={strokeWidth}
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...restProps}
    />
  );
};
