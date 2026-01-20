import { type ComponentProps } from 'react';

import { cn } from '@/shared/lib';

type SectionProps = {
  scrollMargin?: boolean;
} & ComponentProps<'section'>;

export const Section = (props: SectionProps) => {
  const { className, children, scrollMargin = true, ...restProps } = props;

  return (
    <section className={cn('w-full', scrollMargin && 'scroll-mt-[10vh]', className)} {...restProps}>
      {children}
    </section>
  );
};
