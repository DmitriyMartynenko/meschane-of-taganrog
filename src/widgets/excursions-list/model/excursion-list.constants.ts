import { CalendarDays, Clock9, LucideIcon, Palette } from 'lucide-react';

import { FilterSelect } from '@/features/excursion-filtering';

export const FILTER_ICONS: Record<FilterSelect['name'], LucideIcon> = {
  date: CalendarDays,
  theme: Palette,
  duration: Clock9,
} as const;
