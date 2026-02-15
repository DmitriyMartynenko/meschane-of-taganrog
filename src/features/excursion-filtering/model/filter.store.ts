import { create } from 'zustand';

import { isFilterActive, type FilterForm } from './filter.types';

type FilterState = {
  filters: FilterForm;
  setFilters: (value: FilterForm) => void;
  resetFilters: () => void;
  hasActiveFilters: boolean;
};

const initialState: FilterForm = {
  date: '',
  theme: '',
  duration: '',
};

const checkActiveFilters = (filters: FilterForm) =>
  Object.values(filters).some((value) => isFilterActive(value));

export const useFilterStore = create<FilterState>((set) => ({
  filters: initialState,
  setFilters: (filters: FilterForm) =>
    set({ filters, hasActiveFilters: checkActiveFilters(filters) }),
  resetFilters: () =>
    set({
      filters: {
        date: '',
        duration: '',
        theme: '',
      },
      hasActiveFilters: false,
    }),
  hasActiveFilters: false,
}));
