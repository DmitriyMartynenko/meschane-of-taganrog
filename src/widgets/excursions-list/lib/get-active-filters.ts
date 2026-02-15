import { BadgeQuestionMark, LucideIcon } from 'lucide-react';

import {
  FILTER_CONTROLS,
  FilterFormType,
  FilterSelect,
  isFilterActive,
} from '@/features/excursion-filtering';

import { FILTER_ICONS } from '../model/excursion-list.constants';

type ActiveFilterItem = {
  id: FilterSelect['name'];
  Icon: LucideIcon;
  label: string;
  value: string;
};

export const getActiveFilters = (filters: FilterFormType): ActiveFilterItem[] => {
  return FILTER_CONTROLS.map((control) => {
    const filterValue = filters[control.name];

    if (!isFilterActive(filterValue)) return null;

    let value = filterValue;

    if (control.name === 'date') {
      value = new Date(filterValue).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
      });
    } else if (control.options) {
      const option = control.options.find((option) => option.value === filterValue);
      if (option) value = option.label;
    }

    return {
      id: control.name,
      Icon: FILTER_ICONS[control.name] || BadgeQuestionMark,
      label: control.label,
      value: value,
    };
  }).filter((filter) => filter !== null);
};
