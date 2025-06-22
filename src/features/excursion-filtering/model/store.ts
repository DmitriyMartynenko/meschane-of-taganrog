import { create } from 'zustand';

import { type FilterForm } from './types';

type FilterState = {
  filters: FilterForm;
  setFilters: (value: FilterForm) => void;
};

const initialState = {
  date: '',
  theme: '',
  duration: '',
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: initialState,
  setFilters: (filters: FilterForm) => set({ filters }),
}));
