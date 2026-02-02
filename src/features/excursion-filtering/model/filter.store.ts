import { create } from 'zustand';

import { type FilterForm } from './filter.types';

type FilterState = {
  filters: FilterForm;
  setFilters: (value: FilterForm) => void;
  resetFilters: () => void;
};

const initialState: FilterForm = {
  date: '',
  theme: '',
  duration: '',
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: initialState,
  setFilters: (filters: FilterForm) => set({ filters }),
  resetFilters: () =>
    set({
      filters: {
        date: '',
        duration: '',
        theme: '',
      },
    }),
}));
