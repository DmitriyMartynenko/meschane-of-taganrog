import { DateSelect } from '../ui/DateSelect';

import { FilterSelect } from './types';

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
      { value: 'быт', label: 'Быт' },
      { value: 'архитектура', label: 'Архитектура' },
      { value: 'литература', label: 'Литература' },
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
