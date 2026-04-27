import { useFilterParams } from '@/features/excursion-filtering/model/use-filter-params';

import { getActiveFilters } from '../lib/get-active-filters';

export const ActiveFilters = () => {
  const { filters } = useFilterParams();
  const activeFilters = getActiveFilters(filters);

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {activeFilters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center gap-1.5 border border-border-primary bg-background-primary p-3 text-primary"
        >
          <filter.Icon size={16} />
          <p className="leading-none font-semibold">
            {filter.label}: <span className="text-foreground-primary">{filter.value}</span>
          </p>
        </div>
      ))}
    </div>
  );
};
