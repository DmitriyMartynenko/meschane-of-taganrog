import { ComponentProps } from 'react';

import { cn } from '@/shared/lib';

export const PageHeading = (props: ComponentProps<'h1'>) => {
  const { className, children, ...restProps } = props;

  return (
    <h1
      className={cn('text-shadow-promo-title text-center font-chibola text-5xl/tight', className)}
      {...restProps}
    >
      {children}
    </h1>
  );
};

export const PageHeadingHighlight = (props: ComponentProps<'span'>) => {
  const { className, children, ...restProps } = props;

  return (
    <span className={cn('text-[4rem] text-primary', className)} {...restProps}>
      {children}
    </span>
  );
};

export const PageHeadingCaption = (props: ComponentProps<'span'>) => {
  const { className, children, ...restProps } = props;

  return (
    <span className={cn('block text-foreground-secondary', className)} {...restProps}>
      {children}
    </span>
  );
};
