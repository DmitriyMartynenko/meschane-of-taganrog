import { type ComponentProps } from 'react';

import { cn } from '@/shared/lib';

export const Section = (props: ComponentProps<'section'>) => {
  const { className, children, ...restProps } = props;

  return (
    <section
      className={cn('w-full scroll-mt-[10vh] bg-background-primary', className)}
      {...restProps}
    >
      {children}
    </section>
  );
};
