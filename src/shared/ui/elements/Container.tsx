import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

export const Container = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return (
    <div className={cn('flex justify-center items-center container mx-auto', className)}>
      {children}
    </div>
  );
};
