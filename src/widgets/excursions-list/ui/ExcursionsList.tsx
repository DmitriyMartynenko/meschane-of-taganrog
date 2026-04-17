'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { BookingDialog, useBookingDialogStore } from '@/features/booking';
import { useExcursionFiltering, useFilterStore } from '@/features/excursion-filtering';

import { Excursion, ExcursionCard, ExcursionDetails } from '@/entities/excursion';

import { cn, fadeUp, staggerContainer } from '@/shared/lib';
import { PAGES, SECTION_IDS } from '@/shared/model';
import { MotionDiv } from '@/shared/ui';

import { excursions } from '../model/excursions.mock';

import { ActiveFilters } from './ActiveFilters';
import { ExcursionsLoading } from './ExcursionsLoading';
import { NoExcursionsPlaceholder } from './NoExcursionsPlaceholder';

type ExcursionsListProps = {
  className?: string;
  excursionId?: string;
};

export const ExcursionsList = (props: ExcursionsListProps) => {
  const { className } = props;

  const router = useRouter();
  const searchParams = useSearchParams();

  const excursionId = searchParams.get('excursionId');

  const [currentExcursion, setCurrentExcursion] = useState(() => {
    return excursions.find((excursion) => excursion.id === excursionId);
  });
  const [openDetails, setOpenDetails] = useState<boolean>(!!excursionId);

  const handleToggleDetails = (open: boolean, excursion?: Excursion) => {
    if (open) {
      setCurrentExcursion(excursion);
      setOpenDetails(open);

      router.push(`${PAGES.EXCURSIONS}?excursionId=${excursion?.id}`, { scroll: false });
    } else {
      setOpenDetails(open);

      router.push(`${PAGES.EXCURSIONS}`, { scroll: false });
    }
  };

  const { filteredExcursions, isPending } = useExcursionFiltering(excursions);
  const filters = useFilterStore((state) => state.filters);
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
      <ActiveFilters filters={filters} />
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
          {currentExcursion && (
            <ExcursionDetails
              isOpen={openDetails}
              onOpenChange={handleToggleDetails}
              excursion={currentExcursion}
              onStartBooking={handleOpenBookingDialog}
            />
          )}
          <BookingDialog />
        </MotionDiv>
      ) : (
        <NoExcursionsPlaceholder />
      )}
    </div>
  );
};
