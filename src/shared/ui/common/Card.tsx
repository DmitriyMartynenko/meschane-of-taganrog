import { type ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const Card = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col gap-6 p-6 border bg-background-primary shadow-sm text-foreground-primary',
        className
      )}
      {...restProps}
    />
  );
};

export const CardHeader = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className
      )}
      {...restProps}
    />
  );
};

export const CardTitle = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card-title"
      className={cn('font-alegreya font-semibold text-xl leading-none uppercase', className)}
      {...restProps}
    />
  );
};

export const CardDescription = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card-description"
      className={cn('text-foreground-muted text-sm', className)}
      {...restProps}
    />
  );
};

export const CardAction = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...restProps}
    />
  );
};

export const CardContent = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return <div data-slot="card-content" className={cn('flex', className)} {...restProps} />;
};

export const CardFooter = (props: ComponentProps<'div'>) => {
  const { className, ...restProps } = props;

  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center [.border-t]:pt-6', className)}
      {...restProps}
    />
  );
};
