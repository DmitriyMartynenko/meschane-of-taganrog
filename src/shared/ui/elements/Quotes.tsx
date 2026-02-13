import { cn } from '@/shared/lib';

type QuotesProps = {
  className?: string;
  side?: 'left' | 'right';
};

export const Quotes = (props: QuotesProps) => {
  const { className, side = 'right' } = props;

  return (
    <span
      className={cn(
        'pointer-events-none font-serif text-foreground-primary select-none',
        className
      )}
    >
      {side === 'right' ? <>&rdquo;</> : <>&ldquo;</>}
    </span>
  );
};
