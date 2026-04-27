import { EXCURSION_THEME, THEME_LABELS } from '@/entities/excursion';

import { DateSelect } from '../ui/DateSelect';

import { FilterSelect } from './excursion-filtering.types';

export const FILTER_CONTROLS: FilterSelect[] = [
  {
    name: 'date',
    label: 'Дата',
    placeholder: 'Выберите дату',
    CustomSelect: DateSelect,
  },
  {
    name: 'theme',
    label: 'Тематика',
    placeholder: 'Выберите тематику',
    options: [
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
      { value: '120', label: 'До 2-х часов' },
      { value: '180', label: 'До 3-х часов' },
    ],
  },
];
