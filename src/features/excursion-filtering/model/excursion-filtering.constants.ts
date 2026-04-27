import { FilterForm } from './excursion-filtering.types';

export const SEARCH_PARAMS = {
  DATE: 'date',
  THEME: 'theme',
  DURATION: 'duration',
} as const satisfies Record<string, keyof FilterForm>;
