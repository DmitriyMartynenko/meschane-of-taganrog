import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

type SectionSubtitleProps = {
  withDash?: boolean;
} & ComponentProps<'span'>;

export const HeadingSubtitle = (props: SectionSubtitleProps) => {
  const { children, className, withDash = false } = props;

  return (
    <div className={cn('flex items-center gap-4', !withDash && 'justify-center', className)}>
      {withDash && <div className="h-px max-w-[45px] flex-1 bg-foreground-muted/50"></div>}
      <span className="text-foreground-muted">{children}</span>
    </div>
  );
};

export const HeadingTitle = (props: ComponentProps<'h2'>) => {
  const { children: text, className } = props;

  return <h2 className={cn('font-alegreya text-5xl uppercase', className)}>{text}</h2>;
};

type HeadingHighlight = {
  withUnderline?: boolean;
} & ComponentProps<'span'>;

export const HeadingHighlight = (props: HeadingHighlight) => {
  const { children, className, withUnderline = false } = props;

  return (
    <span
      className={cn(
        'text-secondary',
        { 'border-b-2 border-b-secondary': withUnderline },
        className
      )}
    >
      {children}
    </span>
  );
};

export const SectionHeading = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};
