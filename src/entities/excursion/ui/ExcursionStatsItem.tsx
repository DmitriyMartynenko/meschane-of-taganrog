import { cn } from '@/shared/lib';

import { ExcursionStatsConfig } from '../model/excursion.types';

type ExcursionStatsProps = {
  className?: string;
} & ExcursionStatsConfig;

export const ExcursionStatsItem = (props: ExcursionStatsProps) => {
  const { className, icon: Icon, label } = props;

  return (
    <div className={cn('flex items-center gap-1.5 text-primary', className)}>
      <Icon size={16} />
      {label}
    </div>
  );
};
