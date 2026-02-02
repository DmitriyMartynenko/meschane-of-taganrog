'use client';

import { useEffect, useEffectEvent, useState, useTransition } from 'react';

import { Excursion } from '@/entities/excursion';

import { useFilterStore } from '../model/filter.store';

import { matchesFilters } from './matches-filters';

export const useExcursionFiltering = (excursions: Excursion[]) => {
  const [filteredExcursions, setFilteredExcursions] = useState(excursions);
  const filters = useFilterStore((state) => state.filters);

  const [isPending, startTransition] = useTransition();

  const onFilterExcursion = useEffectEvent(() => {
    const filteredExcursions = excursions.filter((excursion) => matchesFilters(excursion, filters));
    setFilteredExcursions(filteredExcursions);
  });

  useEffect(() => {
    startTransition(onFilterExcursion);
  }, [filters]);

  return {
    filteredExcursions,
    isPending,
  };
};
