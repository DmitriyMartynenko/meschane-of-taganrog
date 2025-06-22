import { Excursion } from '@/entities/excursion';

export const sortExcursionsByDate = (excursions: Excursion[], order: 'asc' | 'desc' = 'asc') => {
  return [...excursions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    if (order === 'asc') {
      return dateA.getTime() - dateB.getTime();
    } else {
      return dateB.getTime() - dateA.getTime();
    }
  });
};
