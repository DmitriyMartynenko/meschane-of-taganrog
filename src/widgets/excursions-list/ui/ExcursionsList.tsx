'use client';

import { BookingDialog, useBookingDialogStore } from '@/features/booking';
import { useExcursionFiltering, useFilterStore } from '@/features/excursion-filtering';

import { ExcursionCard } from '@/entities/excursion';

import { cn } from '@/shared/lib';

import { sortExcursionsByDate } from '../lib/sort-excursions-by-date';
import { excursions } from '../model/excursions.mock';

import { ActiveFilters } from './ActiveFilters';
import { ExcursionsLoading } from './ExcursionsLoading';
import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

export const ExcursionsList = () => {
  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);
  const filters = useFilterStore((state) => state.filters);
  const hasActiveFilters = useFilterStore((state) => state.hasActiveFilters);
  const openBookingDialog = useBookingDialogStore((state) => state.open);

  const sortedExcursions = sortExcursionsByDate(filteredExcursions, 'asc');

  return (
    <div className={cn('mt-12 flex flex-col items-center gap-8', hasActiveFilters && 'mt-8')}>
      <ActiveFilters filters={filters} />
      <ExcursionsLoading isPending={isPending} />
      {sortedExcursions.length > 0 ? (
        <div className="flex w-full flex-wrap items-stretch justify-center gap-8">
          {sortedExcursions.map((excursion) => (
            <ExcursionCard
              className="basis-1/3"
              key={excursion.id}
              excursion={excursion}
              onStartBooking={openBookingDialog}
            />
          ))}
          <BookingDialog />
        </div>
      ) : (
        <NoExcursionsPlaceholder />
      )}
    </div>
  );
};
