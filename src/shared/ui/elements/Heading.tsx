import { type ComponentProps } from 'react';

import { cn } from '../../lib/utils/cn';

type SectionSubtitleProps = {
  withoutLine?: boolean;
} & ComponentProps<'span'>;

export const HeadingSubtitle = (props: SectionSubtitleProps) => {
  const { children, className, withoutLine = false } = props;

  return (
    <div className={cn('flex items-center gap-4', withoutLine && 'justify-center', className)}>
      {!withoutLine && <div className="flex-1 max-w-[45px] h-px bg-foreground-muted/50"></div>}
      <span className="text-foreground-muted">{children}</span>
    </div>
  );
};

export const HeadingTitle = (props: ComponentProps<'h2'>) => {
  const { children: text, className } = props;

  return <h2 className={cn('text-5xl font-alegreya uppercase', className)}>{text}</h2>;
};

export const HeadingHighlight = (props: ComponentProps<'span'>) => {
  const { children, className } = props;

  return <span className={cn('text-secondary', className)}>{children}</span>;
};

export const Heading = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};
