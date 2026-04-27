'use client';

import { useEffect } from 'react';

import { BookingDialog, useBookingDialogStore } from '@/features/booking';
import { useExcursionFiltering } from '@/features/excursion-filtering';

import { ExcursionCard, ExcursionDetails } from '@/entities/excursion';

import { cn, fadeUp, staggerContainer } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import { MotionDiv } from '@/shared/ui';

import { excursions } from '../model/excursions.mock';
import { useExcursionDetails } from '../model/use-excursion-details';
import { useExcursionParams } from '../model/use-excursion-params';

import { ActiveFilters } from './ActiveFilters';
import { ExcursionsLoading } from './ExcursionsLoading';
import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

type ExcursionsListProps = {
  className?: string;
};

export const ExcursionsList = (props: ExcursionsListProps) => {
  const { className } = props;

  const { excursionId } = useExcursionParams();
  const {
    isOpen: isDetailsOpen,
    currentExcursion,
    handleToggleDetails,
  } = useExcursionDetails(excursions);

  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);
  const handleOpenBookingDialog = useBookingDialogStore((state) => state.open);

  useEffect(() => {
    if (excursionId) {
      document
        .getElementById(SECTION_IDS.EXCURSIONS_EXCURSIONS_LIST)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        'relative mt-6 flex w-full flex-col items-center gap-6 lg:mt-8 lg:gap-8',
        className
      )}
    >
      <ActiveFilters />
      <ExcursionsLoading isPending={isPending} />
      {filteredExcursions.length > 0 ? (
        <MotionDiv
          className="relative flex w-full flex-col items-stretch justify-center gap-6 lg:flex-row lg:flex-wrap lg:gap-8"
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
        >
          {filteredExcursions.map((excursion) => (
            <MotionDiv key={excursion.id} variants={fadeUp} className="lg:basis-1/3">
              <ExcursionCard
                className="lg:h-full lg:min-w-112.5"
                key={excursion.id}
                excursion={excursion}
                onOpenDetails={handleToggleDetails}
                onStartBooking={handleOpenBookingDialog}
              />
            </MotionDiv>
          ))}
        </MotionDiv>
      ) : (
        <NoExcursionsPlaceholder />
      )}
      {currentExcursion && (
        <ExcursionDetails
          isOpen={isDetailsOpen}
          onOpenChange={handleToggleDetails}
          excursion={currentExcursion}
          onStartBooking={handleOpenBookingDialog}
        />
      )}
      <BookingDialog />
    </div>
  );
};
