import { FilterFormType } from '@/features/excursion-filtering';

import { getActiveFilters } from '../lib/get-active-filters';

type ActiveFiltersProps = {
  filters: FilterFormType;
};

export const ActiveFilters = (props: ActiveFiltersProps) => {
  const { filters } = props;

  const activeFilters = getActiveFilters(filters);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {activeFilters.map((filter) => (
        <div
          key={filter.id}
          className="flex items-center gap-1 border border-border-primary bg-background-primary px-3 py-2 font-semibold text-primary"
        >
          <filter.Icon size={16} />
          {filter.label}:<span className="text-foreground-primary">{filter.value}</span>
        </div>
      ))}
    </div>
  );
};
