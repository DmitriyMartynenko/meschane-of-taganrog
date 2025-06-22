import { useMemo } from 'react';

import { Excursion } from '@/entities/excursion';

import { useFilterStore } from '../../model/store';

export const useExcursionFiltering = (excursions: Excursion[]) => {
  const { filters } = useFilterStore();

  const filteredExcursions = useMemo(() => {
    return excursions.filter((excursion) => {
      if (filters.date) {
        const excursionDate = new Date(excursion.date).toDateString();
        const filterDate = new Date(filters.date).toDateString();

        if (excursionDate !== filterDate) return false;
      }
      if (filters.theme && excursion.theme !== filters.theme) {
        return false;
      }
      if (filters.duration && excursion.duration > Number(filters.duration)) {
        return false;
      }
      return true;
    });
  }, [excursions, filters]);

  return {
    filteredExcursions,
  };
};
