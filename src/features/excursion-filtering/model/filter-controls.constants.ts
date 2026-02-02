import { EXCURSION_THEME, THEME_LABELS } from '@/entities/excursion';

import { DateSelect } from '../ui/DateSelect';

import { FilterSelect } from './filter.types';

export const FILTER_ANY_VALUE = 'any' as const;

export const FILTER_CONTROLS: FilterSelect[] = [
  {
    name: 'date',
    label: 'Дата',
    placeholder: 'Выберите дату',
    CustomSelect: DateSelect,
    options: [{ value: FILTER_ANY_VALUE, label: 'Любая' }],
  },
  {
    name: 'theme',
    label: 'Тематика',
    placeholder: 'Выберите тематику',
    options: [
      { value: FILTER_ANY_VALUE, label: 'Любая' },
      ...Object.values(EXCURSION_THEME).map((theme) => ({
        value: theme,
        label: THEME_LABELS[theme],
      })),
    ],
  },
  {
    name: 'duration',
    label: 'Длительность',
    placeholder: 'Выберите длительность',
    options: [
      { value: FILTER_ANY_VALUE, label: 'Любая' },
      { value: '120', label: 'До 2-х часов' },
      { value: '180', label: 'До 3-х часов' },
    ],
  },
];
