'use client';

import { BookingDialog, useBookingDialogStore } from '@/features/booking';
import { useExcursionFiltering, useFilterStore } from '@/features/excursion-filtering';

import { ExcursionCard } from '@/entities/excursion';

import { cn } from '@/shared/lib';

import { sortExcursionsByDate } from '../lib/sort-excursions-by-date';
import { excursions } from '../model/excursions.mock';

import { ActiveFilters } from './ActiveFilters';
import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

export const ExcursionsList = () => {
  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);
  const filters = useFilterStore((state) => state.filters);
  const hasActiveFilters = useFilterStore((state) => state.hasActiveFilters);

  const openBookingDialog = useBookingDialogStore((state) => state.open);

  if (isPending) {
    return (
      <div className="mt-8 flex h-40 items-center justify-center">
        <p className="animate-pulse text-xl text-muted-primary">Поиск лучших вариантов...</p>
      </div>
    );
  }

  const sortedExcursions = sortExcursionsByDate(filteredExcursions, 'asc');

  return (
    <div className={cn('mt-16 flex flex-col items-center gap-8', hasActiveFilters && 'mt-8')}>
      {hasActiveFilters && <ActiveFilters filters={filters} />}
      {filteredExcursions.length > 0 ? (
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
      ) : (
        <NoExcursionsPlaceholder />
      )}
    </div>
  );
};
