import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

export const Section = (props: ComponentProps<'section'>) => {
  const { className, children, ...restProps } = props;

  return (
    <section
      className={cn('w-full bg-background-primary scroll-mt-[10vh]', className)}
      {...restProps}
    >
      {children}
    </section>
  );
};
