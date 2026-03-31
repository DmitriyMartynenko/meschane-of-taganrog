import { FilterForm } from '@/features/excursion-filtering';

import { cn } from '@/shared/lib';

type ExcursionFilter = {
  className?: string;
};

export const ExcursionFilter = (props: ExcursionFilter) => {
  const { className } = props;

  return (
    <div
      className={cn(
        'border border-primary/25 bg-[rgba(30,20,10,0.6)] px-12 py-10 backdrop-blur-md',
        className
      )}
    >
      <div className="mb-12 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <FilterForm />
      <div className="mt-12 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};
