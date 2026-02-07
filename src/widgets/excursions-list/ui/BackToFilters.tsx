'use client';

import { ArrowUp } from 'lucide-react';

import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';

import { useBackToFiltersVisibility } from '../lib/use-back-to-filters-visibility';

const promoSectionId = 'filter-section';

export const BackToFilters = () => {
  const isVisible = useBackToFiltersVisibility(promoSectionId);

  const handleScrollToFilters = () => {
    document.getElementById(promoSectionId)?.scrollIntoView();
  };

  return (
    <div className="pointer-events-none absolute top-0 right-0 bottom-4">
      <div className="sticky top-[85vh] flex items-center justify-center">
        <Button
          className={cn(
            'pointer-events-auto transition-all',
            isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-25 opacity-0'
          )}
          size="icon"
          onClick={handleScrollToFilters}
        >
          <ArrowUp className="text-foreground-secondary" strokeWidth={2.25} />
        </Button>
      </div>
    </div>
  );
};
