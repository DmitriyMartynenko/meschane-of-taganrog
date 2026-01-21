import { type ComponentProps } from 'react';

import { cn } from '@/shared/lib';

type SectionSubtitleProps = {
  withDash?: boolean;
} & ComponentProps<'span'>;

export const HeadingSubtitle = (props: SectionSubtitleProps) => {
  const { children, className, withDash = false } = props;

  return (
    <div className={cn('flex items-center gap-2', !withDash && 'justify-center', className)}>
      {withDash && <div className="h-px max-w-11.25 flex-1 bg-muted-primary/50"></div>}
      <span className="text-muted-primary">{children}</span>
    </div>
  );
};

export const HeadingTitle = (props: ComponentProps<'h2'>) => {
  const { children, className } = props;

  return <h2 className={cn('font-alegreya text-5xl uppercase', className)}>{children}</h2>;
};

type HeadingHighlight = {
  withUnderline?: boolean;
} & ComponentProps<'span'>;

export const HeadingHighlight = (props: HeadingHighlight) => {
  const { children, className, withUnderline = false } = props;

  return (
    <span
      className={cn('text-primary', { 'border-b-2 border-b-primary': withUnderline }, className)}
    >
      {children}
    </span>
  );
};

export const SectionHeading = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};
