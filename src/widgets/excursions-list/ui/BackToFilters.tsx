'use client';

import { MoveUp } from 'lucide-react';

import { cn } from '@/shared/lib';
import { SECTION_IDS } from '@/shared/model';
import { Button } from '@/shared/ui';

import { useBackToFiltersVisibility } from '../lib/use-back-to-filters-visibility';

type BackToFiltersProps = {
  className?: string;
};

export const BackToFilters = (props: BackToFiltersProps) => {
  const { className } = props;

  const isVisible = useBackToFiltersVisibility(SECTION_IDS.EXCURSIONS_FILTER);

  const handleScrollToFilters = () => {
    document.getElementById(SECTION_IDS.EXCURSIONS_FILTER)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn('pointer-events-none absolute top-0 right-4 bottom-0 z-10', className)}>
      <div
        className={cn(
          'sticky top-[90dvh] flex items-center justify-center transition-all duration-300 ease-in-out',
          isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-25 opacity-0'
        )}
      >
        <Button
          className="group pointer-events-auto border-none p-2"
          lightText
          onClick={handleScrollToFilters}
        >
          <MoveUp strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
};
