import { BookingDialog } from '@/features/booking/ui/BookingDialog';
import { ExcursionCard, type Excursion } from '@/entities/excursion';

import { sortExcursionsByDate } from '../lib/utils/sortExcursionsByDate';

import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

type ExcursionsListProps = {
  excursions: Excursion[];
};

export const ExcursionsList = (props: ExcursionsListProps) => {
  const { excursions } = props;

  if (excursions.length === 0) {
    return <NoExcursionsPlaceholder />;
  }

  const sortedExcursions = sortExcursionsByDate(excursions, 'asc');

  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
      {sortedExcursions.map((excursion) => (
        <ExcursionCard className="basis-2/5" key={excursion.id} excursion={excursion} />
      ))}
      <BookingDialog />
    </div>
  );
};
