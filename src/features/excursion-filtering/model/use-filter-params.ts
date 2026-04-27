import { useRouter, useSearchParams } from 'next/navigation';

import { PAGES } from '@/shared/model';

import { serializeFilters } from '../lib/serialize-filters';

import { SEARCH_PARAMS } from './excursion-filtering.constants';
import { FilterForm } from './excursion-filtering.types';

export const useFilterParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: FilterForm = {
    date: searchParams.get(SEARCH_PARAMS.DATE) ?? '',
    theme: searchParams.get(SEARCH_PARAMS.THEME) ?? '',
    duration: searchParams.get(SEARCH_PARAMS.DURATION) ?? '',
  };

  const setFilters = (data: FilterForm) => {
    const filterParams = serializeFilters(data, searchParams);

    router.push(`${PAGES.EXCURSIONS}?${filterParams}`, { scroll: false });
  };

  return {
    filters,
    setFilters,
  };
};
