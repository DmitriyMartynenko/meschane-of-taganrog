import { BookingDialog, useBookingDialogStore } from '@/features/booking';

import { ExcursionCard, type Excursion } from '@/entities/excursion';

import { sortExcursionsByDate } from '../lib/sort-excursions-by-date';

import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

type ExcursionsListProps = {
  excursions: Excursion[];
};

export const ExcursionsList = (props: ExcursionsListProps) => {
  const { excursions } = props;

  const openBookingDialog = useBookingDialogStore((state) => state.open);

  if (excursions.length === 0) {
    return <NoExcursionsPlaceholder />;
  }

  const sortedExcursions = sortExcursionsByDate(excursions, 'asc');

  return (
    <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
      {sortedExcursions.map((excursion) => (
        <ExcursionCard
          className="basis-2/5"
          key={excursion.id}
          excursion={excursion}
          onStartBooking={openBookingDialog}
        />
      ))}
      <BookingDialog />
    </div>
  );
};
