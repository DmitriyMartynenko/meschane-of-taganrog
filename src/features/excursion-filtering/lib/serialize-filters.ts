import { SEARCH_PARAMS } from '../model/excursion-filtering.constants';
import { FilterForm } from '../model/excursion-filtering.types';

export const serializeFilters = (
  data: FilterForm,
  searchParams: URLSearchParams
): URLSearchParams => {
  const params = new URLSearchParams(searchParams);

  Object.entries(data).forEach(([filter, value]) => {
    if (!value) {
      params.delete(filter);
    } else if (filter === SEARCH_PARAMS.DATE) {
      params.set(filter, new Date(value).toISOString().split('T')[0]);
    } else {
      params.set(filter, value);
    }
  });

  return params;
};
