'use client';

import { useEffect, useEffectEvent, useState, useTransition } from 'react';

import { Excursion } from '@/entities/excursion';

import { useFilterParams } from '../model/use-filter-params';

import { matchesFilters } from './matches-filters';

export const useExcursionFiltering = (excursions: Excursion[]) => {
  const { filters } = useFilterParams();
  const [filteredExcursions, setFilteredExcursions] = useState(excursions);

  const [isPending, startTransition] = useTransition();

  const onFilterExcursion = useEffectEvent(() => {
    const filteredExcursions = excursions.filter((excursion) => matchesFilters(excursion, filters));
    setFilteredExcursions(filteredExcursions);
  });

  useEffect(() => {
    startTransition(onFilterExcursion);
  }, [filters.date, filters.theme, filters.duration]);

  return {
    filteredExcursions,
    isPending,
  };
};
