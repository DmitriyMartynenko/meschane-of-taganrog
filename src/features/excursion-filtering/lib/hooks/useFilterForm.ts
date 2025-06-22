import { useEffect, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { FilterFormSchema } from '../../model/schemas';
import { useFilterStore } from '../../model/store';
import { type FilterForm } from '../../model/types';

export const useFilterForm = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { setFilters } = useFilterStore();

  const form = useForm<FilterForm>({
    resolver: zodResolver(FilterFormSchema),
    defaultValues: {
      date: '',
      theme: '',
      duration: '',
    },
  });

  useWatch({ control: form.control });

  const onSubmit = (data: FilterForm) => {
    setFilters(data);
    sectionRef.current?.scrollIntoView();
  };

  const onReset = () => form.reset();

  useEffect(() => {
    sectionRef.current = document.getElementById('excursions-section');
  }, []);

  return {
    form,
    onSubmit,
    onReset,
  };
};
