import { type ComponentProps } from 'react';

import { cn } from '@/shared/lib';

type SectionProps = {
  noScrollMargin?: boolean;
} & ComponentProps<'section'>;

export const Section = (props: SectionProps) => {
  const { className, children, noScrollMargin = false, ...restProps } = props;

  return (
    <section
      className={cn('w-full scroll-mt-[10vh]', noScrollMargin && 'scroll-mt-0', className)}
      {...restProps}
    >
      {children}
    </section>
  );
};
