import { ComponentProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

type SectionSubtitleProps = {
  withoutLine?: boolean;
} & ComponentProps<'span'>;

const SectionSubtitle = (props: SectionSubtitleProps) => {
  const { children, withoutLine = false } = props;

  return (
    <div className="flex items-center gap-4">
      {!withoutLine && <div className="flex-1 max-w-[45px] h-px bg-foreground-muted/50"></div>}
      <span className="text-foreground-muted">{children}</span>
    </div>
  );
};

const SectionTitle = (props: ComponentProps<'h2'>) => {
  const { children: text, className } = props;

  return <h2 className={cn('text-5xl font-alegreya uppercase', className)}>{text}</h2>;
};

const SectionHeadingHighlight = (props: ComponentProps<'span'>) => {
  const { children, className } = props;

  return <span className={cn('text-secondary', className)}>{children}</span>;
};

const SectionHeading = (props: ComponentProps<'div'>) => {
  const { children, className } = props;

  return <div className={cn('flex flex-col gap-4', className)}>{children}</div>;
};

export { SectionHeading, SectionSubtitle, SectionTitle, SectionHeadingHighlight };
