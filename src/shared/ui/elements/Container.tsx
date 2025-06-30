import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

export const Container = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return (
    <div className={cn('container mx-auto flex items-center justify-center', className)}>
      {children}
    </div>
  );
};
