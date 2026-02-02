import { Excursion } from '@/entities/excursion';

import { FilterForm, isFilterActive } from '../model/filter.types';

export const matchesFilters = (excursion: Excursion, filters: FilterForm): boolean => {
  if (isFilterActive(filters.date)) {
    const excursionDate = new Date(excursion.date).toDateString();
    const filterDate = new Date(filters.date).toDateString();

    if (excursionDate !== filterDate) return false;
  }

  if (isFilterActive(filters.theme)) {
    if (excursion.theme !== filters.theme) return false;
  }

  if (isFilterActive(filters.duration)) {
    if (excursion.duration > Number(filters.duration)) {
      return false;
    }
  }

  return true;
};
