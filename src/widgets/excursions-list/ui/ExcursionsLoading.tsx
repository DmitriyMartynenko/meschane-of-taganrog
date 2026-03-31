import { cn } from '@/shared/lib';
import { Spinner } from '@/shared/ui';

type ExcursionsLoadingProps = {
  className?: string;
  isPending: boolean;
};

export const ExcursionsLoading = (props: ExcursionsLoadingProps) => {
  const { className, isPending } = props;

  if (!isPending) return null;

  return (
    <div className={cn('flex animate-pulse items-center gap-2 text-xl text-primary', className)}>
      <Spinner />
      <span className="font-semibold">Поиск подходящих экскурсий...</span>
    </div>
  );
};
