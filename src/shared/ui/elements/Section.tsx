import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Section = (props: ComponentProps<'section'>) => {
  const { className, children, ...restProps } = props;

  return (
    <section className={cn('w-full min-h-[700px] bg-background-primary', className)} {...restProps}>
      {children}
    </section>
  );
};
