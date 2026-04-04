'use client';

import { BookingDialog, useBookingDialogStore } from '@/features/booking';
import { useExcursionFiltering, useFilterStore } from '@/features/excursion-filtering';

import { ExcursionCard } from '@/entities/excursion';

import { cn, fadeUp, staggerContainer, viewport } from '@/shared/lib';
import { MotionDiv } from '@/shared/ui';

import { sortExcursionsByDate } from '../lib/sort-excursions-by-date';
import { excursions } from '../model/excursions.mock';

import { ActiveFilters } from './ActiveFilters';
import { ExcursionsLoading } from './ExcursionsLoading';
import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

type ExcursionsListProps = {
  className?: string;
};

export const ExcursionsList = (props: ExcursionsListProps) => {
  const { className } = props;

  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);
  const filters = useFilterStore((state) => state.filters);
  const openBookingDialog = useBookingDialogStore((state) => state.open);

  const sortedExcursions = sortExcursionsByDate(filteredExcursions, 'asc');

  return (
    <div
      className={cn(
        'relative mt-6 flex w-full flex-col items-center gap-6 lg:mt-8 lg:gap-8',
        className
      )}
    >
      <ActiveFilters filters={filters} />
      <ExcursionsLoading isPending={isPending} />
      {sortedExcursions.length > 0 ? (
        <MotionDiv
          className="relative flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:flex-wrap lg:gap-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          {sortedExcursions.map((excursion) => (
            <MotionDiv key={excursion.id} variants={fadeUp} className="lg:basis-1/3">
              <ExcursionCard
                className="lg:h-full lg:min-w-112.5"
                key={excursion.id}
                excursion={excursion}
                onStartBooking={openBookingDialog}
              />
            </MotionDiv>
          ))}
          <BookingDialog />
        </MotionDiv>
      ) : (
        <NoExcursionsPlaceholder />
      )}
    </div>
  );
};
