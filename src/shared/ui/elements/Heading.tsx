import { ReactNode, type ComponentProps } from 'react';

import { cn } from '@/shared/lib';

type HeadingSubtitleProps = {
  withDash?: boolean;
} & ComponentProps<'span'>;

export const HeadingSubtitle = (props: HeadingSubtitleProps) => {
  const { children, className, withDash = false, ...restProps } = props;

  return (
    <div className={cn('flex items-center gap-2', !withDash && 'justify-center', className)}>
      {withDash && <div className="h-px max-w-11.25 flex-1 bg-muted-primary/50"></div>}
      <span className="text-muted-primary" {...restProps}>
        {children}
      </span>
    </div>
  );
};

export const HeadingTitle = (props: ComponentProps<'h2'>) => {
  const { children, className, ...restProps } = props;

  return (
    <h2
      className={cn(
        'font-alegreya text-5xl uppercase group-data-[variant=dark]:text-foreground-primary group-data-[variant=light]:text-foreground-secondary',
        className
      )}
      {...restProps}
    >
      {children}
    </h2>
  );
};

type HeadingHighlight = {
  withUnderline?: boolean;
} & ComponentProps<'span'>;

export const HeadingHighlight = (props: HeadingHighlight) => {
  const { children, className, withUnderline = false, ...restProps } = props;

  return (
    <span
      className={cn(
        'group-data-[variant=dark]:text-primary group-data-[variant=light]:text-secondary',
        withUnderline && [
          'border-b-2 group-data-[variant=dark]:border-b-primary group-data-[variant=light]:border-b-secondary',
        ],
        className
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};

type HeadingVariat = 'dark' | 'light';

type HeadingProps = {
  variant?: HeadingVariat;
  children?: ReactNode;
  className?: string;
};

export const Heading = (props: HeadingProps) => {
  const { children, className, variant = 'dark', ...restProps } = props;

  return (
    <div className={cn('group flex flex-col gap-4', className)} data-variant={variant}>
      {children}
    </div>
  );
};
