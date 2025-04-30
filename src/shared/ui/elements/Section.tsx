import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Section = (props: ComponentProps<'section'>) => {
  const { className, children, ...restProps } = props;

  return (
    <section
      className={cn('w-full bg-background-primary scroll-mt-[25vh]', className)}
      {...restProps}
    >
      {children}
    </section>
  );
};
