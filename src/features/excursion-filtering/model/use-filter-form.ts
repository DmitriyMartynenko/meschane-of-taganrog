'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { type FilterForm } from './excursion-filtering.types';
import { FilterFormSchema } from './filter-form.schemas';
import { useFilterParams } from './use-filter-params';

export const useFilterForm = () => {
  const { filters, setFilters } = useFilterParams();

  const form = useForm<FilterForm>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      date: filters.date,
      theme: filters.theme,
      duration: filters.duration,
    },
  });

  const onSubmit = (data: FilterForm) => {
    setFilters(data);
  };

  return {
    form,
    onSubmit,
  };
};
