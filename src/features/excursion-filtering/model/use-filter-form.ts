'use client';

import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { FilterFormSchema } from './filter-form.schemas';
import { useFilterStore } from './filter.store';
import { type FilterForm } from './filter.types';

export const useFilterForm = () => {
  const setFilters = useFilterStore((state) => state.setFilters);

  const form = useForm<FilterForm>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      date: '',
      theme: '',
      duration: '',
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
